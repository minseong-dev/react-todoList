import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/todo/todoListState";

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);

    return (
        <Wrapper>
            <Input placeholder="검색어를 입력하세요" />
            {todoList.map((todo) => (
                <TodoItem key={todo.id} item={todo} />
            ))}
        </Wrapper>
    );
};

export default TodoList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid rgb(220, 220, 220);
    padding: 15px 0px;

    &:focus {
        outline: none;
        border-bottom: 1px solid black;
    }
`;
