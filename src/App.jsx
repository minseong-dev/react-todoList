import styled from "styled-components";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";

function App() {
    return (
        <>
            <Wrapper>
                <Header />
                <TodoEditor />
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
