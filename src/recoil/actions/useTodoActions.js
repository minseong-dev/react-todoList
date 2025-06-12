import { todoListState } from "../atoms/todoListState";
import { todoIdState } from "../atoms/todoIdState";
import { useRecoilState } from "recoil";

export const useTodoActions = () => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const [todoId, setTodoId] = useRecoilState(todoIdState);

    const addTodo = (content, priority) => {
        const newTodo = {
            id: todoId,
            content: content,
            priority: priority,
            createdDate: new Date().toLocaleDateString(),
            isDone: false,
        };
        setTodoList([...todoList, newTodo]);
        setTodoId(parseInt(todoId) + 1);
    };

    const deleteTodo = (id) => {
        setTodoList(todoList.filter((todo) => String(todo.id) !== String(id)));
    };

    const checkTodo = (id) => {
        setTodoList(
            todoList.map((todo) =>
                String(todo.id) === String(id)
                    ? { ...todo, isDone: !todo.isDone }
                    : todo
            )
        );
    };

    const updateTodo = (id, updateData) => {
        setTodoList(
            todoList.map((todo) =>
                String(todo.id) === String(id)
                    ? { ...todo, ...updateData }
                    : todo
            )
        );
    };

    return {
        addTodo,
        deleteTodo,
        checkTodo,
        updateTodo,
    };
};
