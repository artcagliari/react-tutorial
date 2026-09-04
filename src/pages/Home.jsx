import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme}>
            <h2>Pagina inicial
                <p>Bem vindo</p>
            </h2>
        </div>
    )
}

export default Home;