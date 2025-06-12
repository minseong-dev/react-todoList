import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filterState } from "../recoil/todo/filterState";
import { sortState } from "../recoil/todo/sortState";

const PRIORITY_OPTIONS = ["상", "중", "하"];

const TodoFilterSort = () => {
    const [filters, setFilter] = useRecoilState(filterState);
    const setSort = useSetRecoilState(sortState);

    const onClickFilter = (priority) => {
        const newFilter = filters.includes(priority)
            ? filters.filter((item) => item != priority)
            : [...filters, priority];

        setFilter(newFilter);
    };

    const onChangeSort = (e) => {
        setSort(e.target.value);
    };

    return (
        <Wrapper>
            <FilterWrapper>
                {PRIORITY_OPTIONS.map((priority) => (
                    <FilterBtn
                        key={priority}
                        onClick={() => onClickFilter(priority)}
                        active={filters.includes(priority)}
                    >
                        {priority}
                    </FilterBtn>
                ))}
            </FilterWrapper>
            <SortSelect onChange={onChangeSort} defaultValue={"default"}>
                <option value="default" disabled hidden>
                    정렬
                </option>
                <option value={"latest"}>최신순</option>
                <option value={"oldest"}>오래된순</option>
                <option value={"priority"}>우선순위순</option>
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
