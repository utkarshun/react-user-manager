import React from "react";

function UserList({ users, onDeleteUser, onEditUser }) {
  return (
    <div className="user-list">
      <h3>User List</h3>

      {users.length === 0 ? (
        <p>No Users added yet.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <div>
                <strong>{user.name}</strong> - {user.email}
              </div>
              <button
                onClick={() => onEditUser(index)}
                style={{ marginRight: "5px" }}
              >
                Edit
              </button>
              <button onClick={() => onDeleteUser(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
