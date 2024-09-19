import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TodoList } from "./todo-list";
import { readLocalStorage, writeLocalStorage } from "@/services/local-storage";

export function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const LOCAL_STORAGE_KEY = "_TASKS";

  useEffect(() => {
    const tasks = readLocalStorage(LOCAL_STORAGE_KEY);
    setTasks(tasks);
  }, []);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = { id: Date.now(), text: newTask, completed: false };
      const updatedTasks = [...tasks, newTaskObj];
      setTasks(updatedTasks);
      writeLocalStorage(LOCAL_STORAGE_KEY, updatedTasks);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    writeLocalStorage(LOCAL_STORAGE_KEY, updatedTasks);
  };

  const editTask = (id, newText) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    writeLocalStorage(LOCAL_STORAGE_KEY, updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    writeLocalStorage(LOCAL_STORAGE_KEY, updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">TODO List</h1>
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="mr-2"
        />
        <Button onClick={addTask}>Add new</Button>
      </div>
      <TodoList
        tasks={tasks}
        toggleTask={toggleTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}
