import style from '../styles/components/title.module.css'

const Title = ({content}) => {
  return (
    <h2 className={style.title}>{content}</h2>
  )
}

export default Title