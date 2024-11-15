import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // For the arrow icons

const TaskManager = () => {
  const [tasks, setTasks] = useState([]); // Active task list
  const [deletedTasks, setDeletedTasks] = useState([]); // Deleted or completed tasks history
  const [task, setTask] = useState(''); // Current task input
  const [description, setDescription] = useState(''); // Task description
  const [date, setDate] = useState(''); // Selected date (string format)
  const [priority, setPriority] = useState('Normal'); // Task priority
  const [showAll, setShowAll] = useState(false); // Toggle for "All Tasks"
  const [showPriority, setShowPriority] = useState(false); // Toggle for "High Priority"
  const [showBasic, setShowBasic] = useState(false); // Toggle for "Basic Tasks"
  const [showTaskForm, setShowTaskForm] = useState(false); // Toggle to show/hide the form
  const [showDeleted, setShowDeleted] = useState(false); // Toggle for "Deleted Tasks"

  // Function to add a new task
  const addTask = () => {
    if (task.trim() && description.trim() && date) { // Ensure deadline is provided
      setTasks([...tasks, { text: task, description, id: Date.now(), priority, date }]); // Add task with description and date
      setTask('');
      setDescription('');
      setPriority('Normal'); // Reset priority after adding task
      setDate(''); // Reset date
      setShowTaskForm(false); // Hide the task form
    }
  };

  // Function to delete a task and move it to history
  const deleteTask = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    setDeletedTasks([...deletedTasks, { ...taskToDelete, status: 'Deleted', date: new Date() }]);
    setTasks(tasks.filter((task) => task.id !== id)); // Remove task from active list
  };

  // Function to mark a task as done and move it to history
  const markAsDone = (id) => {
    const taskToDone = tasks.find((task) => task.id === id);
    setDeletedTasks([...deletedTasks, { ...taskToDone, status: 'Done', date: new Date() }]);
    setTasks(tasks.filter((task) => task.id !== id)); // Remove task from active list
  };

  // Handle task input change
  const handleTaskChange = (e) => setTask(e.target.value);

  // Handle description input change
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  // Handle priority change (using text input for simplicity)
  const handlePriorityChange = (e) => setPriority(e.target.value);

  // Handle date change (Deadline picker)
  const handleDateChange = (e) => setDate(e.target.value);

  // Filter tasks based on priority
  const filteredTasks = {
    all: tasks,
    priority: tasks.filter((task) => task.priority === 'High'),
    basic: tasks.filter((task) => task.priority === 'Normal'),
  };

  // Function to format the date and time
  const formatDateTime = (date) => {
    return new Date(date).toLocaleString(); // Formats to: "MM/DD/YYYY, HH:MM:SS AM/PM"
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left Side: Task History Section */}
      <div style={{
        flex: 1,
        padding: '20px',
        borderRight: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Add Task Button */}
        <button
          onClick={() => setShowTaskForm(!showTaskForm)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            marginBottom: '20px',
          }}
        >
          {showTaskForm ? 'Cancel' : 'Add New Task'}
        </button>

        {/* Task History Section */}
        <h2>Task History</h2>
        
        {/* Button to show/hide deleted tasks */}
        <button
          onClick={() => setShowDeleted(!showDeleted)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: showDeleted ? '#007BFF' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          {showDeleted ? 'Hide History' : 'Task History'}
        </button>

        {/* Deleted Tasks */}
        {showDeleted && (
          <ul style={{
            listStyleType: 'none',
            padding: 0,
            width: '100%',
            maxHeight: '60vh',
            overflowY: 'auto',
          }}>
            {deletedTasks.map((task) => (
              <li key={task.id} style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                borderRadius: '5px',
                marginBottom: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                width: '90%'
              }}>
                <strong>{task.text}</strong>
                <p><em>{task.description}</em></p>
                <p><strong>Deadline:</strong> {formatDateTime(task.date)}</p>
                <p><strong>Status:</strong> {task.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right Side: Task Input and Task List */}
      <div style={{
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px',
        overflowY: 'auto',
        position: 'relative',
      }}>
        {/* Task Form (Appears when the button is clicked) */}
        {showTaskForm && (
          <div style={{
            width: '90%',
            maxWidth: '500px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}>
            <h2>New Task</h2>

            {/* Task Name Input */}
            <input
              type="text"
              placeholder="Enter task name"
              value={task}
              onChange={handleTaskChange}
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                marginBottom: '10px',
                width: '100%'  // Full width
              }}
            />

            {/* Task Priority Input */}
            <input
              type="text"
              placeholder="Enter task priority (e.g., Normal, High)"
              value={priority}
              onChange={handlePriorityChange}
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                marginBottom: '10px',
                width: '100%'  // Full width
              }}
            />

            {/* Task Description Input */}
            <textarea
              placeholder="Enter task description"
              value={description}
              onChange={handleDescriptionChange}
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                width: '100%',
                height: '100px',
                resize: 'vertical',
                marginBottom: '10px'
              }}
            />

            {/* Deadline (Date Picker) */}
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                marginBottom: '10px',
                width: '100%'  // Full width
              }}
            />

            {/* Add Task Button */}
            <button
              onClick={addTask}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                width: '100%'  // Full width to match input width
              }}
            >
              Add Task
            </button>
          </div>
        )}

        {/* Task List Title and Filters */}
        {!showTaskForm && (
          <>
            <h2 style={{ marginBottom: '20px' }}>Task List</h2>

            {/* Filter tasks by button toggles */}
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}>
              <button
                onClick={() => setShowAll(!showAll)}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: showAll ? '#007BFF' : '#ccc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                All Tasks
                {showAll ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {showAll && (
                <ul style={{
                  listStyleType: 'none',
                  padding: 0,
                  width: '100%',
                  maxHeight: '60vh',
                  overflowY: 'auto',
                }}>
                  {filteredTasks.all.map((task) => (
                    <li key={task.id} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      padding: '10px',
                      backgroundColor: '#f9f9f9',
                      borderRadius: '5px',
                      marginBottom: '10px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      width: '90%',
                    }}>
                      <strong>{task.text}</strong>
                      <p><em>{task.description}</em></p>
                      <p><strong>Deadline:</strong> {task.date}</p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%'
                      }}>
                        <button
                          onClick={() => deleteTask(task.id)}
                          style={{
                            backgroundColor: 'red',
                            color: 'white',
                            border: 'none',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                          }}
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => markAsDone(task.id)}
                          style={{
                            backgroundColor: 'green',
                            color: 'white',
                            border: 'none',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                          }}
                        >
                          Done
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
