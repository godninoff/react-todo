import {
  configureStore,
  createSlice,
  PayloadAction,
  combineReducers,
} from "@reduxjs/toolkit";
import filterReducer from "./filtersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

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
    editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      state.todos = state.todos.map((t) => ({
        ...t,
        title: t.id === action.payload.id ? action.payload.title : t.title,
      }));
    },
  },
});

export const { newTask, removeTask, completedTask, editTodo } =
  todoSlice.actions;

const rootReducer = combineReducers({
  todos: todoSlice.reducer,
  filters: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todos.todos;

export default store;
