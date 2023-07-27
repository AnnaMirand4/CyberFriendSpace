import { useState } from 'react'
import style from '../styles/components/mensage.module.css'
import database from '../Service/Firebase'
import { ref, push, set } from 'firebase/database'


const Mensage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensage, setMensage]= useState('')

    const handleInputName = (e) => {
        setName(e.target.value)
    }
    const handleInputEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleInputMensage = (e) => {
        setMensage(e.target.value)
    }

    const handleSubmit= (e) => {
        e.preventDefault()

    const messageListRef = ref(database, 'mensagens') 
    const newMessageRef = push(messageListRef) 
    set(newMessageRef, {
      name: name,
      email: email,
      text: mensage
    })

    setName('')
    setEmail('')
    setMensage('')
    }


  return (
    <>
    <section className={style.section}>
        <form className={style.form} onSubmit={handleSubmit}>
            <input 
            className={style.formInput}
            type="text"
            placeholder='Digite seu nome'
            onChange={handleInputName}
            value={name}
            />
            <input 
            className={style.formInput}
            type="email"
            placeholder='Digite seu email'
            onChange={handleInputEmail}
            value={email}
            />
            <textarea
            className={style.formInput} 
            placeholder='Digite sua mensagem'
            onChange={handleInputMensage}
            value={mensage}
            />
            <button className={style.formButton} type='submit'>Enviar mensagem</button>
        </form>
    </section>
    </>
  )
}

export default Mensage