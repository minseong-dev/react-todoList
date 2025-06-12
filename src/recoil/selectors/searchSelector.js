import { selector } from "recoil";
import { sortedTodoList } from "./sortSelector";
import { searchState } from "../atoms/searchState";

export const searchedTodoList = selector({
    key: "searchedTodoList",
    get: ({ get }) => {
        const todoList = get(sortedTodoList);
        const keyword = get(searchState).toLowerCase().trim();

        if (!keyword) return todoList;

        return todoList.filter((todo) =>
            todo.content.toLowerCase().includes(keyword)
        );
    },
});
