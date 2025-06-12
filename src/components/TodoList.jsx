import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchedTodoList } from "../recoil/todo/searchSelector";
import { searchState } from "../recoil/todo/searchState";

const TodoList = () => {
    const todoList = useRecoilValue(searchedTodoList);
    const setSearch = useSetRecoilState(searchState);

    const onChangeSeach = (e) => {
        setSearch(e.target.value);
    };

    return (
        <Wrapper>
            <Input placeholder="검색어를 입력하세요" onChange={onChangeSeach} />
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
    flex: 1;
    border: none;
    border-bottom: 1px solid rgb(220, 220, 220);
    padding: 15px 0px;

    &:focus {
        outline: none;
        border-bottom: 1px solid rgb(37, 147, 255);
    }
`;
