import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log("Error fetching users: ", err));
  }, []);

  // Save or update user
  const handleSaveUser = (user) => {
    const isDuplicate = users.some(
      (u, index) =>
        (u.name.toLowerCase() === user.name.toLowerCase() ||
          u.email.toLowerCase() === user.email.toLowerCase()) &&
        index !== editIndex
    );

    if (isDuplicate) {
      toast.error("User with this name or email already exists!");
      return;
    }

    if (editIndex !== null) {
      const userId = users[editIndex].id;

      axios
        .put(`http://localhost:3001/users/${userId}`, user)
        .then((res) => {
          const updatedUsers = [...users];
          updatedUsers[editIndex] = res.data;
          setUsers(updatedUsers);
          setEditIndex(null);
          toast.success("User Updated");
        })
        .catch((err) => {
          toast.error("Failed to update user");
          console.error(err);
        });
    } else {
      axios
        .post("http://localhost:3001/users", user)
        .then((res) => {
          setUsers([...users, res.data]);
          toast.success("User Added");
        })
        .catch((err) => {
          toast.error("Failed to add user");
          console.error(err);
        });
    }
  };

  // Delete user
  const deleteUser = (indexToDelete) => {
    const userToDelete = users[indexToDelete];

    axios
      .delete(`http://localhost:3001/users/${userToDelete.id}`)
      .then(() => {
        const newUsers = users.filter((_, index) => index !== indexToDelete);
        setUsers(newUsers);
        if (editIndex === indexToDelete) {
          setEditIndex(null);
        }
        toast.info("User Deleted");
      })
      .catch((err) => {
        toast.error("Failed to delete user");
        console.error(err);
      });
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>React User Manager</h1>

      <UserForm
        onAddUser={handleSaveUser}
        editingUser={editIndex !== null ? users[editIndex] : null}
      />

      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", width: "100%" }}
      />

      <UserList
        users={filteredUsers}
        onDeleteUser={deleteUser}
        onEditUser={(index) => setEditIndex(index)}
      />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
