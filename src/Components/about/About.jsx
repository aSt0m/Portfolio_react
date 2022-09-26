
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg' 
import {TbAward} from 'react-icons/tb'
import {BiFolderOpen} from 'react-icons/bi'
import {HiOutlineUsers} from 'react-icons/hi'


export const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
         <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me-about" />
            </div>
         </div>
         <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
            <article className="about__card">
              <HiOutlineUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
            <article className="about__card">
              <BiFolderOpen className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus reiciendis error iure tempora rerum. Maiores corrupti nam, obcaecati, natus beatae, vel eveniet consequuntur sed ea quia voluptatibus perspiciatis officia?
          Deleniti saepe eligendi perferendis quaerat, suscipit eius incidunt iste dicta unde et, similique obcaecati nihil veniam. </p>
          <a href="*contact" className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>
  )
}
