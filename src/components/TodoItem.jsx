import { useState } from "react";
import styled from "styled-components";
import TodoModal from "./TodoModal";

const TodoItem = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Wrapper>
                <Input type="checkbox" value={item.isDone} />
                <Content>{item.content}</Content>
                <Pv>{item.priority}</Pv>
                <Date>{item.createdDate}</Date>
                <Button onClick={openModal}>수정</Button>
                <Button>삭제</Button>
            </Wrapper>

            {isModalOpen && <TodoModal onClose={closeModal} item={item} />}
        </>
    );
};

export default TodoItem;

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
`;

const Pv = styled.span`
    font-size: 14px;
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
