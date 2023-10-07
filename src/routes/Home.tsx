import { styled, useTheme } from "@mui/material";
import Hello from "../components/Hello";

const Home = () => {
    const theme = useTheme()
    return (
        <Main theme={theme}>
            <Hello />
        </Main>
    );
};


const Main = styled('main')`
    background-color: ${props => props.theme.palette.background.default};
    height: 100dvh;
    width: 100dvw;

`

export default Home;