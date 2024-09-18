 import React from 'react'
import { NavLink } from 'react-router-dom';

 import '../style/port.css'
 function Port2({img,h2,link}) {
   return (
     <section>
        <div className="container">
            <div className="port_wrapper">
       <div className="port_card">
        <h2>{h2}</h2>
        <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
        <button><NavLink to={link}>VIEW PROJECT</NavLink> </button>

       </div>
       <img className='pimg' src={img} alt="" />

       </div>
       </div>
     </section>
   )
 }
 
 export default Port2
 
