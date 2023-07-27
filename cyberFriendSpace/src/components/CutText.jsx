import style from '../styles/components/cuttext.module.css'

const CutText = ({content}) => {
    return (
        <>
            <p className={style.cuttext}>{content}</p>
        </>
      )
}

export default CutText