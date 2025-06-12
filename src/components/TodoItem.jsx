import { useState } from "react";
import styled from "styled-components";
import TodoModal from "./TodoModal";
import React from "react";
import { PRIORITY_OPTIONS } from "../constants/priorityOptions";
import { useTodoActions } from "../recoil/actions/useTodoActions";

const TodoItem = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const priorityOption = PRIORITY_OPTIONS.find(
        (option) => option.value === item.priority
    );
    const { deleteTodo, checkTodo } = useTodoActions();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const deleteItem = () => deleteTodo(item.id);
    const checkItem = () => checkTodo(item.id);

    return (
        <>
            <Wrapper>
                <Input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={checkItem}
                />
                <Content $done={item.isDone ? true : undefined}>
                    {item.content}
                </Content>
                <Dot color={priorityOption.color} />
                <Date>{item.createdDate}</Date>
                <Button onClick={openModal}>수정</Button>
                <Button onClick={deleteItem}>삭제</Button>
            </Wrapper>

            {isModalOpen && <TodoModal onClose={closeModal} item={item} />}
        </>
    );
};

export default React.memo(TodoItem);

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(240, 240, 240);
`;

const Input = styled.input`
    width: 20px;
`;

const Content = styled.span`
    flex: 1;
    text-decoration: ${(props) => (props.$done ? "line-through" : "none")};
    color: ${(props) => (props.$done ? "gray" : "black")};
`;

const Dot = styled.span`
    background-color: ${(props) => props.color};
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 6px;
`;

const Date = styled.span`
    font-size: 14px;
    color: gray;
`;

const Button = styled.button`
    cursor: pointer;
    color: gray;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    padding: 5px;
`;
