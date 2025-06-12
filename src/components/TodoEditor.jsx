import styled from "styled-components";
import { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { todoListState } from "../recoil/todo/todoListState";
import { todoIdState } from "../recoil/todo/todoIdState";
import { PRIORITY_OPTIONS } from "../constants/priorityOptions";

const TodoEditor = () => {
    const [inputData, setInputData] = useState({
        content: "",
        priority: "",
    });
    const [todoId, setTodoId] = useRecoilState(todoIdState);
    const setTodoList = useSetRecoilState(todoListState);

    const onChangeInputData = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };

    const addItem = () => {
        setTodoList((todoList) => [
            ...todoList,
            {
                id: todoId,
                content: inputData.content,
                priority: inputData.priority,
                createdDate: new Date().toLocaleDateString(),
                isDone: false,
            },
        ]);

        setTodoId(parseInt(todoId) + 1);

        setInputData({
            content: "",
            priority: "",
        });
    };

    return (
        <Wrapper>
            <TodoInput
                onChange={onChangeInputData}
                name="content"
                value={inputData.content}
                placeholder="할 일을 입력하세요"
            />
            <PrioritySelect
                onChange={onChangeInputData}
                name="priority"
                defaultValue="default"
            >
                <option value="default" disabled hidden>
                    우선순위
                </option>
                {PRIORITY_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </PrioritySelect>
            <AddBtn onClick={addItem}>추가</AddBtn>
        </Wrapper>
    );
};

export default TodoEditor;

const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`;

const TodoInput = styled.input`
    flex: 1;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 0px 10px;

    &:focus {
        outline-color: rgb(37, 147, 255);
    }
`;

const PrioritySelect = styled.select`
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const AddBtn = styled.button`
    background-color: rgb(37, 147, 255);
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;

    &:hover {
        opacity: 0.9;
    }
`;
