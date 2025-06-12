import { useState } from "react";
import styled from "styled-components";
import TodoModal from "./TodoModal";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms/todoListState";
import React from "react";
import { PRIORITY_OPTIONS } from "../constants/priorityOptions";

const TodoItem = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const priorityOption = PRIORITY_OPTIONS.find(
        (option) => option.value === item.priority
    );

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const deleteItem = () => {
        const newTodoList = todoList.filter(
            (todo) => String(todo.id) !== String(item.id)
        );
        setTodoList(newTodoList);
    };

    const onChangeCheck = () => {
        const newTodoList = todoList.map((todo) =>
            String(todo.id) === String(item.id)
                ? { ...todo, isDone: !todo.isDone }
                : todo
        );
        setTodoList(newTodoList);
    };

    return (
        <>
            <Wrapper>
                <Input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={onChangeCheck}
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
