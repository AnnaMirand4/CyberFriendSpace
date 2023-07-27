import { Link } from "react-router-dom"
import style from "../styles/components/menu.module.css"
import Logo from "../assets/logo.png"

const Menu = () => {
  return (
    <> 
        <img className={style.logo} src= {Logo} alt="logo com o nome da pagina Cyber Friend Space e um coração nas cores preto e azul" />
        <nav className={style.menuContainer}>
            <li>
                <Link className={style.menuLink} to='/'>Home</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/sobre'>Cyberbullyng?</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/forum'>Fórum</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/contato'>Contato</Link>
            </li>
        </nav>
    </>
  )
}

export default Menu