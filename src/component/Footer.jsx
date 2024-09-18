import React from 'react'
import '../style/footer.css'
import { NavLink } from 'react-router-dom';
import logo from '../image/flogo.svg'
import link from '../image/link.svg'
import git from '../image/git.svg'
import tvit from '../image/tvit.svg'



function Footer() {
  return (
    <div>
       
    <footer>
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_w2">
        <img src={logo} alt="" />
        <ul className='hw'>
                <li><NavLink className='f_a' to="/"> HOME</NavLink></li>
                <li><NavLink className='f_a' to="/port">PORTFOLIO</NavLink> </li>
                <li><NavLink className='f_a' to="/contact">CONTACT ME</NavLink> </li>
            </ul>
            </div>
            <div className="f_icon">
              <img src={git} alt="" />
              <img src={tvit} alt="" />
              <img src={link} alt="" />
            </div>
            </div>
      </div>
    </footer>
    </div>
    
    
  )
}

export default Footer
