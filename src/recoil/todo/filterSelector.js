import { selector } from "recoil";
import { todoListState } from "./todoListState";
import { filterState } from "./filterState";

export const filteredTodoList = selector({
    key: "filteredTodoList",
    get: ({ get }) => {
        const todoList = get(todoListState);
        const filters = get(filterState);

        if (filters.length === 0) return todoList;

        return todoList.filter((todo) => filters.includes(todo.priority));
    },
});
