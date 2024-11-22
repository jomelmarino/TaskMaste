import React, { useState } from "react";
import '../Style/TaskManager.css'; // Import the external CSS for styling

const Dashboard = () => {
  // State to hold the list of users (This should come from a backend API. It holds user objects with username and password.)
  const [users, setUsers] = useState([]);
  
  // State to hold the list of deleted users for history tracking (This can be stored in a backend database for auditing purposes.)
  const [deletedUsers, setDeletedUsers] = useState([]);
  
  // State for input values when adding a new user account
  const [newUsername, setNewUsername] = useState(""); // New username to be added (must be unique)
  const [newPassword, setNewPassword] = useState(""); // Password for the new user
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password to ensure the correct entry
  
  // State for toggling the visibility of the user input form
  const [showInput, setShowInput] = useState(false); 
  
  // State for toggling the visibility of deleted user history (Would typically be fetched from the backend)
  const [showHistory, setShowHistory] = useState(false); 
  
  // State for toggling the visibility of the user list (the backend should provide the list of current users)
  const [showUsers, setShowUsers] = useState(true); 
  
  // State to track which user is selected for deletion (Useful for confirming a delete action)
  const [confirmDelete, setConfirmDelete] = useState(null);

  // Function to add a new user (This would send a POST request to the backend to store the user in the database)
  const handleAddUser = () => {
    // Check if any fields are empty
    if (newUsername.trim() === "" || newPassword === "" || confirmPassword === "") {
      alert("All fields are required!");
      return;
    }

    // Check if the passwords match
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if the username already exists (Ideally, this should check with the backend to avoid duplicate usernames in the database)
    if (users.some((user) => user.username === newUsername)) {
      alert("Username already exists!");
      return;
    }

    // Add the new user to the state (In a real app, this should send a POST request to the backend to save the user data)
    setUsers([...users, { username: newUsername, password: newPassword }]);
    
    // Clear the input fields after adding the user
    setNewUsername("");
    setNewPassword("");
    setConfirmPassword("");
    alert("User added successfully!");
    
    // Send a POST request to the backend to add the new user to the database
    // Example: POST /users with data { username: newUsername, password: newPassword }
  };

  // Function to set up deletion confirmation for a specific user (This allows confirming the delete action)
  const handleDeleteConfirmation = (index) => {
    setConfirmDelete(index); // Store the index of the user being considered for deletion
  };

  // Function to handle the actual user deletion (This would send a DELETE request to the backend)
  const handleDeleteUser = () => {
    if (confirmDelete !== null) {
      const userToDelete = users[confirmDelete]; // Get the user to delete based on the index
      // Add the deleted user to the history list (This could be saved in the backend for auditing or backup purposes)
      setDeletedUsers([...deletedUsers, userToDelete]);
      
      // Remove the user from the current users list (This state update mimics the deletion process in the UI)
      const updatedUsers = users.filter((_, i) => i !== confirmDelete);
      setUsers(updatedUsers);
      
      // Reset the confirmation state
      setConfirmDelete(null);

      // Send a DELETE request to the backend to remove the user from the database
      // Example: DELETE /users/{userId}
    }
  };

  // Function to cancel the delete action (Resets the confirmation dialog)
  const cancelDelete = () => {
    setConfirmDelete(null); // Reset the confirmation state
  };

  return (
    <div className="container">
      <h1 className="heading">User Dashboard</h1>

      {/* Card showing the number of total users and deleted accounts */}
      <div className="card">
        <h3>
          Total Users: {users.length} | 
          <span className="deletedCount"> Deleted Accounts: {deletedUsers.length}</span>
        </h3>
      </div>


      {/* Buttons for toggling visibility of various sections */}
      <div className="buttonsRow">
        <button onClick={() => setShowInput(!showInput)} className="toggleButton">
          {showInput ? "Hide Input" : "New Account"}
        </button>

        <button onClick={() => setShowUsers(!showUsers)} className="toggleButton">
          {showUsers ? "Hide All Users" : "Show All Users"}
        </button>

        <button onClick={() => setShowHistory(!showHistory)} className="toggleButton">
          {showHistory ? "Hide Deleted Accounts History" : "Show Deleted Accounts History"}
        </button>
      </div>

      {/* Show the user input form if showInput is true */}
      {showInput && (
        <div className="inputContainer">
          <h2>Create New Account</h2>
          <input
            type="text"
            placeholder="Enter username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)} // Update username state
            className="input"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)} // Update password state
            className="input"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
            className="input"
          />
          <button onClick={handleAddUser} className="addButton">
            Create Account
          </button>
        </div>
      )}

      {/* Conditionally render the user list if showUsers is true */}
      {showUsers && (
        <ul className="userList">
          {users.map((user, index) => (
            <li key={index} className="userItem">
              <span>{user.username}</span>
              <button onClick={() => handleDeleteConfirmation(index)} className="deleteButton">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Show confirmation dialog when a user is selected for deletion */}
      {confirmDelete !== null && (
        <div className="confirmationDialog">
          <p>Are you sure you want to delete this account?</p>
          <button onClick={handleDeleteUser} className="confirmButton">
            Yes, Delete
          </button>
          <button onClick={cancelDelete} className="cancelButton">
            No, Cancel
          </button>
        </div>
      )}

      {/* Show the deleted users history if showHistory is true */}
      {showHistory && deletedUsers.length > 0 && (
        <div className="historySection">
          <h3>Deleted Accounts History</h3>
          <ul className="historyList">
            {deletedUsers.map((user, index) => (
              <li key={index} className="historyItem">
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
