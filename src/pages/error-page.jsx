import logo from "../../public/logo.png"
import gif from "../../public/developer.gif"
import './error-page.css';

export default function Erro(){

    return (
    <div id="pagina">
            <img id="logo" src={logo} alt="logo"/>
        <div id="erro">
            <h2 id="titu">The page was not found, but we are working on it.</h2><br />
            <img id="gif" src={gif} alt="gif" /><br />
            <h3 id="subtitu">Please click the "Return to Home" button.</h3><br />
        </div>
            <button id="btHome" onClick={() => window.location.href = "/"}>Return to Home</button>
    </div>
    )
}