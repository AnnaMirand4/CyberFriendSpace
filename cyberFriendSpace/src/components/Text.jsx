import style from '../styles/components/text.module.css'

const Text = ({content}) => {
  return (
    <>
        <p className={style.text}>{content}</p>
    </>
  )
}

export default Text