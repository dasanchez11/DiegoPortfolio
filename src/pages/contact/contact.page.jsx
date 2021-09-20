import { useState } from "react"
import './contact.page.styles.scss'
import axios from 'axios'

const ContactPage = () =>{
    const [information, setInformation] = useState({email:"",name:"", message:""})


    const handleInput = (e) =>{
        e.preventDefault()
        setInformation(state => ({...state, [e.target.name]:e.target.value }))
    }

    const handleSumbit = (e) =>{
        e.preventDefault()
        if (information.email==="") {
            window.alert('must enter a valid Email')
        }else if (information.name===""){
            window.alert('must enter a valid Name')
        }else {
            axios.post('https://portfolioapidiego.herokuapp.com/contact/sendEmail', {
                data: JSON.stringify(information)
            })
        }
    }

    return(
        <div className='contact'>
            <div className='contact__title'>Contact</div>
            <div className='contact__name-title'>Name</div>
            <input onChange={handleInput} name='name' className='contact__name-value' placeholder='Enter your name' required></input>
            <div className='contact__email-title'>Email</div>
            <input onChange={handleInput} name='email' type='email' className='contact__email-value' placeholder='Enter your email' required></input>
            <div className='contact__message-title'>Message</div>
            <textarea onChange={handleInput} name='message' className='contact__message-value' placeholder='Enter your message' required></textarea>
            <button onClick={handleSumbit} className='contact__button'>SEND</button>
        </div>
    )
}

export default ContactPage