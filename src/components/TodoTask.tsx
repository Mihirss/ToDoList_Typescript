import React, { FC } from "react";
import { ITodo } from "../Interfaces";

interface ITodoTaskProps {
  task: ITodo;
  deleteTask(TaskNameToRemove: string): void;
}

const TodoTask = ({ task, deleteTask }: ITodoTaskProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadLine}</span>
      </div>
      <button
        className="delete"
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
