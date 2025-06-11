import { atom } from "recoil";

export const todoIdState = atom({
    key: "todoIdState",
    default: 0,
    effects: [
        ({ setSelf, onSet }) => {
            const storeKey = "todoId";

            const savedId = localStorage.getItem(storeKey);
            savedId ? setSelf(savedId) : 0;

            onSet((newId) => {
                localStorage.setItem(storeKey, String(newId));
            });
        },
    ],
});
