import React, { useState, useEffect } from "react";
function UserForm({ onAddUser, editingUser }) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setemail(editingUser.email);
    }
  }, [editingUser]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    onAddUser({ name, email });

    setName("");
    setemail("");
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h3>Add User</h3>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <br />
      <button type="submit">Add User</button>
    </form>
  );
}
export default UserForm;
