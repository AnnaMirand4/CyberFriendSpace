import style from '../styles/components/header.module.css'

const Header = ({img, title}) => {
  return (
    <header className={style.header} >
    <h1 className={style.title}>{title}</h1>
    <img src={img} alt={title} className={style.img} />


    </header>
  )
}

export default Header