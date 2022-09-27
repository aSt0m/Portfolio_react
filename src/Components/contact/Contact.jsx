


import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail/>
            <h4 className="contact__title">Email</h4>
            <h5 className="contact__user">user</h5>
            <a href="mailto:tomtrejodev@gmail.com">Send message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine/>
            <h4 className="contact__title">messenger</h4>
            <h5 className="contact__user">user</h5>
            <a href="mailto:tomtrejodev@gmail.com">Send message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4 className="contact__title">Whatsapp</h4>
            <h5 className="contact__user">user</h5>
            <a href="mailto:tomtrejodev@gmail.com">Send message</a>
          </article>
        </div>
      </div>
    </section>
  )
}
