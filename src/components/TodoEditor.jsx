import styled from "styled-components";
import { useState } from "react";
import { PRIORITY_OPTIONS } from "../constants/priorityOptions";
import { useTodoActions } from "../recoil/actions/useTodoActions";

const TodoEditor = () => {
    const [inputData, setInputData] = useState({
        content: "",
        priority: "",
    });
    const { addTodo } = useTodoActions();

    const onChangeInputData = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };

    const addItem = () => {
        if (!inputData.content.trim() || !inputData.priority.trim()) {
            alert("내용과 우선순위를 입력하세요.");
            return;
        }

        addTodo(inputData.content, inputData.priority);
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
