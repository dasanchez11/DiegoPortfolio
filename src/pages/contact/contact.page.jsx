import React,{ useState } from "react"
import './contact.page.styles.scss'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const ContactPage = () =>{
    const history = useHistory()
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
            const sendEmail = async () =>{
                try {
                    await axios.post('https://portfolioapidiego.herokuapp.com/contact/sendEmail', {
                    data: JSON.stringify(information)
                    })
                } catch (error) {
                    window.alert('An Error Occurred while sending data, please try again later')
                }
                history.push('/')
                }
        sendEmail()
        }
    }

    return(
        <form className='contact'>
            <div className='contact__title'>Contact</div>
            <div className='contact__name-title'>Name</div>
            <input onChange={handleInput} name='name' className='contact__name-value' placeholder='Enter your name' required></input>
            <div className='contact__email-title'>Email</div>
            <input onChange={handleInput} name='email' type='email' className='contact__email-value' placeholder='Enter your email' required></input>
            <div className='contact__message-title'>Message</div>
            <textarea onChange={handleInput} name='message' className='contact__message-value' placeholder='Enter your message' required></textarea>
            <div className="contact__button-cta">
                <div className="btn" target="_blank" onClick={handleSumbit}>Send</div>
            </div>
        </form>
    )
}

export default ContactPage