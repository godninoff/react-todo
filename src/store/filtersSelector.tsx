import { createSelector } from "@reduxjs/toolkit";
import { RootState, selectTodos } from ".";

export const selectFilter = (state: RootState) => state.filters;

export const filterTasks = createSelector(
  [selectTodos, selectFilter],
  (tasks, filter) => {
    if (filter === "all") return tasks;

    if (filter === "completed") {
      return tasks.filter(({ complete }) => complete);
    }
    return tasks.filter(({ complete }) => !complete);
  }
);
