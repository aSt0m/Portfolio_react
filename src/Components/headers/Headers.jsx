
import React from 'react'
import './headers.css'
import { Cta } from './Cta'
import ME from '../../assets/me.png'
import { Headersocial } from './Headersocial'

export const Headers = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Tom Trejo</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <Cta />
        <Headersocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}
