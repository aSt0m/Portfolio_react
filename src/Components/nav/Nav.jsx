import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdMiscellaneousServices} from 'react-icons/md'




export const Nav = () => {
 const [activeNav, setactiveNav] = useState('#')
  return (
    <nav>
      <a href="#" 
        onClick={()=> setactiveNav('#')} 
        className={activeNav === '#' ? "active" : ''}><AiOutlineHome/>
      </a>
      <a href="#about" 
        onClick={ ()=> setactiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience"
        onClick={()=> setactiveNav('#experience')  }
        className={activeNav === '#experience' ? 'active' : ''}
        ><BsBriefcase/></a>
      <a href="#services"
        onClick={()=> setactiveNav('#services')}
        className={ activeNav === '#services' ? 'active' : ''}
      ><MdMiscellaneousServices/></a>
      <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}
