import styled from "styled-components";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/todo/todoListState";

let id = 0;
const getId = () => {
    return id++;
};

const TodoEditor = () => {
    const [inputData, setInputData] = useState({
        content: "",
        priority: "",
    });
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
                id: getId(),
                content: inputData.content,
                priority: inputData.priority,
                createdDate: new Date().toLocaleDateString(),
                isDone: false,
            },
        ]);
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
                value={inputData.priority}
            >
                <option value="" disabled selected>
                    우선순위
                </option>
                <option value={"상"}>상</option>
                <option value={"중"}>중</option>
                <option value={"하"}>하</option>
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
    border-radius: 5px;
    padding: 0px 10px;
`;

const PrioritySelect = styled.select`
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
`;

const AddBtn = styled.button`
    background-color: #64c964;
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
