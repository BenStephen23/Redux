import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "./redux/actions";

const Task = ({ id, description, isDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  const handleEdit = () => {
    if (isEditing && newDescription.trim()) {
      dispatch(editTask(id, newDescription));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={handleToggle} />
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {description}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
};

export default Task;
