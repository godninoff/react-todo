import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  complete: boolean;
}

interface TodoSliceState {
  todos: Task[];
}

const initialState: TodoSliceState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: Math.random().toString(21).slice(-5),
          title: action.payload,
          complete: false,
        },
      ];
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    completedTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((t) =>
        t.id === action.payload ? { ...t, complete: !t.complete } : { ...t }
      );
    },
    editTodo: (state, action: PayloadAction<string>) => {
      // state.todos = state.todos.map((t) => {
      //   if (t.id === action.payload) {
      //     t.title = action.payload;
      //   }
      //   return t;
      // });

      state.todos.map((item) =>
        item.id === action.payload ? action.payload : item
      );
    },
  },
});

export const { newTask, removeTask, completedTask, editTodo } =
  todoSlice.actions;

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todos.todos;

export default store;
