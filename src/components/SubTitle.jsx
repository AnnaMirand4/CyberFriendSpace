import style from '../styles/components/subtitle.module.css'

const SubTitle = ({content}) => {
  return (
    <h3 className={style.subtitle}>{content}</h3>
  )
}

export default SubTitle