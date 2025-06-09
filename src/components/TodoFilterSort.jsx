import styled from "styled-components";

const TodoFilterSort = () => {
    return (
        <Wrapper>
            <FilterWrapper>
                <FilterBtn>상</FilterBtn>
                <FilterBtn>중</FilterBtn>
                <FilterBtn>하</FilterBtn>
            </FilterWrapper>
            <SortSelect>
                <option value="" disabled selected>
                    정렬
                </option>
                <option value={""}>최신순</option>
                <option value={""}>오래된순</option>
                <option value={""}>우선순위순</option>
            </SortSelect>
        </Wrapper>
    );
};

export default TodoFilterSort;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FilterWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const FilterBtn = styled.button`
    background-color: white;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 12px;
`;

const SortSelect = styled.select`
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
`;
