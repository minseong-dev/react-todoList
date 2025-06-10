import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <Wrapper>
            <Input placeholder="검색어를 입력하세요" />
            <TodoItem />
            <TodoItem />
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
