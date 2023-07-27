import style from '../styles/components/subtext.module.css' 

const SubText = ({content}) => {
  return (
    <p className={style.subtext}>{content}</p>
  )
}

export default SubText