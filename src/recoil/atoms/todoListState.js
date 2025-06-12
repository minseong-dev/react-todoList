import { atom } from "recoil";

export const todoListState = atom({
    key: "todoListState",
    default: [],
    effects: [
        ({ setSelf, onSet }) => {
            const storeKey = "todo";

            const savedTodo = localStorage.getItem(storeKey);
            if (savedTodo != null) {
                setSelf(JSON.parse(savedTodo));
            }

            onSet((newTodoList) => {
                localStorage.setItem(storeKey, JSON.stringify(newTodoList));
            });
        },
    ],
});
