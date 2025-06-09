import styled from "styled-components";

const Header = () => {
    const today = new Date();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    };

    const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(
        today
    );

    return (
        <Wrapper>
            <Span>TodoList</Span>
            <Span>{formattedDate}</Span>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    display: flex;
    gap: 60px;
    width: 100%;
    height: 40px;
    align-items: center;

    border-bottom: 1px solid;
`;
const Span = styled.span`
    font-size: 18px;
`;
