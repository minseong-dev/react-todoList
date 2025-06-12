import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filterState } from "../recoil/atoms/filterState";
import { sortState } from "../recoil/atoms/sortState";
import { PRIORITY_OPTIONS } from "../constants/priorityOptions";

const TodoFilterSort = () => {
    const [filters, setFilter] = useRecoilState(filterState);
    const setSort = useSetRecoilState(sortState);

    const onClickFilter = (priority) => {
        const newFilter = filters.includes(priority)
            ? filters.filter((item) => item !== priority)
            : [...filters, priority];

        setFilter(newFilter);
    };

    const onChangeSort = (e) => {
        setSort(e.target.value);
    };

    return (
        <Wrapper>
            <FilterWrapper>
                {PRIORITY_OPTIONS.map(({ value, label, color }) => (
                    <FilterBtn
                        key={value}
                        onClick={() => onClickFilter(value)}
                        $active={filters.includes(value) ? true : undefined}
                    >
                        <Dot color={color} />
                        {label}
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
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: ${(props) => (props.$active ? "gray" : "white")};
    color: ${(props) => (props.$active ? "white" : "black")};
    border: 1px solid ${(props) => (props.$active ? "gray" : "lightgray")};
    cursor: pointer;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 12px;
`;

const SortSelect = styled.select`
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const Dot = styled.span`
    background-color: ${(props) => props.color};
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
`;
