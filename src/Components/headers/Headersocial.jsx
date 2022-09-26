

import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


export const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank' ><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" ><BsGithub/></a>
        <a href="https://www.twitter.com" target="_blank" ><BsTwitter/></a>
    </div>
  )
}