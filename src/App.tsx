import React, { FC, useState } from "react";
import "./App.css";
import { ITodo } from "./Interfaces";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    setTodos([...todos, { taskName: task, deadLine: deadLine }]);
    setTask("");
    setDeadLine(0);
    console.log(todos);
  };

  const deleteTask = (TaskNameToRemove: string): void => {
    setTodos(
      todos.filter((todo) => {
        return todo.taskName !== TaskNameToRemove;
      }),
    );
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-title">
          <h1>ToDo List</h1>
        </div>
        <div className="Add-todo">
          <div className="input-group">
            <input
              type="text"
              placeholder="Task..."
              onChange={handleChange}
              name="task"
              value={task}
            />
            <input
              type="number"
              placeholder="DeadLine (In Day)..."
              onChange={handleChange}
              name="deadline"
              value={deadLine}
            />
          </div>
          <button onClick={addTask}>Add</button>
        </div>
      </div>
      <div className="App-body">
        {todos.map((todo: ITodo, key: number) => (
          <TodoTask key={key} task={todo} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
