import { selector } from "recoil";
import { filteredTodoList } from "./filterSelector";
import { sortState } from "../atoms/sortState";
import { PRIORITY_ORDER } from "../../constants/priorityOptions";

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
                sorted.sort(
                    (a, b) =>
                        PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
                );
                break;
            }
            default:
                break;
        }

        return sorted;
    },
});
