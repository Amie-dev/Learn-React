import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  // Format time as hh:mm
  const patternTime = (T) => {
    const date = new Date(T);
    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  };

  // Add new task
  const addTask = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") return setIsFilled(true);
    setIsFilled(false);
    const newTask = {
      id: Date.now(), // ✅ unique ID
      title,
      content,
      time: patternTime(Date.now()),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setContent("");
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex gap-10 w-full h-screen">
      {/* Left side: Add Task */}
      <div className="flex flex-col p-10 border-r border-amber-50 pr-10 w-[50%]">
        <h2 className="text-6xl font-bold mb-4">Add Task</h2>
        <form onSubmit={addTask} className="flex flex-col gap-4">
          <input
            className="p-2 border-amber-50 border-2 rounded"
            type="text"
            value={title}
            placeholder="Enter Your Task Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="p-2 border-amber-50 border-2 rounded min-h-[200px]"
            value={content}
            placeholder="Write Details Here"
            onChange={(e) => setContent(e.target.value)}
          />
          {isFilled && (
            <p className="text-red-500 text-sm animate-bounce">
              {" "}
              Please fill all fields{" "}
            </p>
          )}
          <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded 
             transition duration-300 ease-in-out 
             hover:bg-orange-400 hover:text-white 
             hover:scale-95 hover:shadow-lg"
          >
            Add Task
          </button>
        </form>
      </div>

      {/* Right side: Recent Tasks */}
      <div className="flex flex-col pt-10 pr-10 w-[50%]">
        <h1 className="text-6xl font-bold mb-4">Recent Tasks</h1>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet...</p>
        ) : (
          <ul className="flex flex-wrap gap-8">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`p-4 border  rounded shadow-sm w-fit min-w-[200px] min-h-fit transition hover:shadow-md ${
                  task.completed ? "bg-green-100 line-through" : "bg-gray-50"
                }`}
              >
                <h3 className="font-semibold text-2xl text-black whitespace-pre-wrap">
                  {task.title}
                </h3>
                <p className="text-xl pt-1 text-gray-700 whitespace-pre-wrap">
                  {task.content}
                </p>
                <div className="flex  justify-end">
                  <span className="text-xs pt-2 text-gray-500 ">
                    Added at {task.time}
                  </span>
                </div>

                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => toggleComplete(task.id)}
                    className="px-2 py-1 text-xs bg-green-500 text-white rounded transition hover:scale-105"
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-2 py-1 text-xs bg-red-500 text-white rounded transition hover:scale-105"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
