import React, { useState } from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        localStorage.setItem("username", JSON.stringify(name));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("message", JSON.stringify(message));
        
    }

    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id='contact-form' onSubmit={handleSubmit}>
                    <label htmlFor="name" value={name}>Full name</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder='Enter your name' />
                    <label htmlFor="email" value={email}>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='Enter your email' />
                    <label htmlFor="message" value={message}>Message</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Enter your message' required></textarea>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact