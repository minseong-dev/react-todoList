import styled from "styled-components";
import { useState } from "react";
import { PRIORITY_OPTIONS } from "../constants/priorityOptions";
import { useTodoActions } from "../recoil/actions/useTodoActions";

const TodoModal = ({ onClose, item }) => {
    const [inputData, setInputData] = useState({ ...item });
    const { updateTodo } = useTodoActions();

    const onChangeInputData = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };

    const updateItem = () => {
        updateTodo(item.id, inputData);
        onClose();
    };

    return (
        <Overlay onClick={onClose}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
                <TodoContainer>
                    <Input
                        onChange={onChangeInputData}
                        name="content"
                        value={inputData.content}
                    />
                    <Select
                        onChange={onChangeInputData}
                        name="priority"
                        value={inputData.priority}
                    >
                        {PRIORITY_OPTIONS.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </Select>
                </TodoContainer>
                <BtnContainer>
                    <Btn onClick={updateItem}>수정</Btn>
                    <Btn onClick={onClose}>닫기</Btn>
                </BtnContainer>
            </ModalBox>
        </Overlay>
    );
};

export default TodoModal;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

const ModalBox = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    background: white;
    padding: 20px;
    border-radius: 10px;
    min-width: 400px;
`;

const TodoContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Input = styled.input`
    flex: 1;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid lightgray;
    padding: 5px 0px;

    &:focus {
        outline: none;
        border-bottom: 1px solid rgb(37, 147, 255);
    }
`;

const Select = styled.select`
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Btn = styled.button`
    background-color: white;
    color: black;
    cursor: pointer;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 5px 10px;
`;
