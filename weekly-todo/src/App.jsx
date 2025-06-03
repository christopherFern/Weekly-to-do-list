import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input.trim()]);
    setInput("");
  };
  const handleDelete = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Weekly To-Do List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "0.5rem", fontSize: "1rem" }}
      />
      <button onClick={addTask} style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem"}}>
        Add
      </button>
      
      <ul style={{ marginTop: "1rem" }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center"}}>
            <span style={{ flexGrow: 1 }}>{task}</span>
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "0.5rem", background: "red", color: "white", border: "none", padding: "0.3rem 0.6rem"}}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
