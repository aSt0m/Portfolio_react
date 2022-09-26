import React from 'react'
import "./testimonials.css"
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination, Autoplay,EffectCoverflow  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: avatar1,
    name: "Juanito Lopex",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod perferendis quis, distinctio qui vitae nam repudiandae, eum quidem illo in facilis temporibus facere praesentium alias sapiente eligendi vel ad."    
  },
  {
    avatar: avatar2,
    name: "Pepito Ramirez",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod perferendis quis, distinctio qui vitae nam repudiandae, eum quidem illo in facilis temporibus facere praesentium alias sapiente eligendi vel ad."    
  },
  {
    avatar: avatar3,
    name: "Fulano Mendez",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod perferendis quis, distinctio qui vitae nam repudiandae, eum quidem illo in facilis temporibus facere praesentium alias sapiente eligendi vel ad."    
  },
  {
    avatar: avatar4,
    name: "Ramiro Juarez",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod perferendis quis, distinctio qui vitae nam repudiandae, eum quidem illo in facilis temporibus facere praesentium alias sapiente eligendi vel ad."    
  }
]

 
export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review for clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      //install Swiper modules
      modules={[Pagination,Autoplay,EffectCoverflow]}
      spaceBetween={70}
      slidesPerView={1}
      navigation
      parameters={
        {loop: true}
      }
      loop={true}
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        
      }}
      pagination={{ clickable: true }}
      >
 
         
         {
          
           data.map(({avatar,name,review}, index)=>{
             return(
               <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
          </SwiperSlide>
            )
            
          })
        }

      </Swiper>
    </section>
  )
}
