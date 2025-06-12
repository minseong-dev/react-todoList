import { selector } from "recoil";
import { filteredTodoList } from "./filterSelector";
import { sortState } from "./sortState";

export const sortedTodoList = selector({
    key: "sortedTodoList",
    get: ({ get }) => {
        const todoList = get(filteredTodoList);
        const sort = get(sortState);
        let sorted = [...todoList];

        switch (sort) {
            case "latest":
                sorted.sort(
                    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
                );
                break;
            case "oldest":
                sorted.sort(
                    (a, b) => new Date(a.createdDate) - new Date(b.createdDate)
                );
                break;
            case "priority": {
                const priorityOrder = { 상: 1, 중: 2, 하: 3 };
                sorted.sort(
                    (a, b) =>
                        priorityOrder[a.priority] - priorityOrder[b.priority]
                );
                break;
            }
            default:
                break;
        }

        return sorted;
    },
});
