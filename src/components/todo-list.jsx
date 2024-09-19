import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PencilIcon, TrashIcon } from "lucide-react";

export function TodoList({ tasks, toggleTask, editTask, deleteTask }) {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
          {editingTask === task.id ? (
            <Input
              type="text"
              value={task.text}
              onChange={(e) => editTask(task.id, e.target.value)}
              onBlur={() => setEditingTask(null)}
              onKeyDown={(e) => e.key === "Enter" && setEditingTask(null)}
              className="mr-2"
            />
          ) : (
            <div className="flex items-center">
              <Checkbox
                id={`task-${task.id}`}
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
                className="mr-2"
              />
              <label htmlFor={`task-${task.id}`} className={`${task.completed ? "line-through text-gray-500" : ""}`}>
                {task.text}
              </label>
              <span className={`ml-2 px-2 py-1 text-xs rounded-full ${task.completed ? "bg-green-200" : "bg-yellow-200"}`}>
                {task.completed ? "Completed" : "Pending"}
              </span>
            </div>
          )}
          <div className="space-x-2 flex items-center">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditingTask(task.id)}
            >
              <PencilIcon className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => deleteTask(task.id)}
            >
              <TrashIcon className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
