import styled from "styled-components";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoFilterSort from "./components/TodoFilterSort";

function App() {
    return (
        <>
            <Wrapper>
                <Header />
                <TodoEditor />
                <TodoFilterSort />
            </Wrapper>
        </>
    );
}

export default App;

const Wrapper = styled.div`
    width: 600px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;
