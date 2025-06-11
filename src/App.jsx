import styled from "styled-components";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoFilterSort from "./components/TodoFilterSort";
import TodoList from "./components/TodoList";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <>
            <RecoilRoot>
                <Wrapper>
                    <Header />
                    <TodoEditor />
                    <TodoFilterSort />
                    <TodoList />
                </Wrapper>
            </RecoilRoot>
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
