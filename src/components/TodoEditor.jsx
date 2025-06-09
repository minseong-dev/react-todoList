import styled from "styled-components";

const TodoEditor = () => {
    return (
        <Wrapper>
            <TodoInput placeholder="할 일을 입력하세요" />
            <PrioritySelect>
                <option value="" disabled selected>
                    우선순위
                </option>
                <option value={"high"}>상</option>
                <option value={"middle"}>중</option>
                <option value={"low"}>하</option>
            </PrioritySelect>
            <AddBtn>추가</AddBtn>
        </Wrapper>
    );
};

export default TodoEditor;

const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`;

const TodoInput = styled.input`
    flex: 1%;
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
