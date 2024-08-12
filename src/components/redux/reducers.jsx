import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, FILTER_TASKS } from "./actions";

const initialState = {
  tasks: [],
  filter: "ALL", 
};

let nextId = 1;

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: nextId++,
            description: action.payload.description,
            isDone: false,
          },
        ],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};
