import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { filterTasks } from "./redux/actions";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks =
    filter === "ALL"
      ? tasks
      : tasks.filter((task) => (filter === "DONE" ? task.isDone : !task.isDone));

  return (
    <div>
      <div>
        <button onClick={() => dispatch(filterTasks("ALL"))}>All</button>
        <button onClick={() => dispatch(filterTasks("DONE"))}>Done</button>
        <button onClick={() => dispatch(filterTasks("NOT_DONE"))}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default ListTask;
