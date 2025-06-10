import styled from "styled-components";

const TodoItem = () => {
    return (
        <Wrapper>
            <Input type="checkbox" />
            <Content>Todo</Content>
            <Pv>상</Pv>
            <Date>2025.06.10</Date>
            <Button>수정</Button>
            <Button>삭제</Button>
        </Wrapper>
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
