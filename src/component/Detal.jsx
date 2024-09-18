import React from 'react'
import '../style/detal.css'
import { NavLink } from 'react-router-dom';

import chap1 from '../image/chap.jpg'
import ong1 from '../image/ong.jpg'
function Detal({img,h2,img1,img2,chap,ong,link1,link2}) {
  return (
    <section>
      <div className="container">
        <img className='imgd' src={img} alt="" />
        <div className="detal_wrapper">
        <div className="port_card">
        <h2>{h2}</h2>
        <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
        <span>Interaction Design / Front End Development</span>
        <span>HTML / CSS / JS</span> <br /><br />
        <button>VISIT WEBSITE</button>
       </div>
       <div className="project_b">
        <h3>Project Background</h3>
        <p>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
        <h3>Static Previews</h3>
        <img className='imgd1' src={img1} alt="" />
        <img className='imgd1'  src={img2} alt="" />
       </div>
        </div>
        <div className="d_cursor">
           <NavLink to={link1}><h3><img className='chap' src={chap1}  alt=""/>{chap}</h3></NavLink>
           <NavLink to={link2}><h3>{ong}  <img className='ong' src={ong1} alt="" /> </h3></NavLink> 
        </div>
      </div>
    </section>
  )
}

export default Detal
