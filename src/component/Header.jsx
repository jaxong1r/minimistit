import React, { useRef } from 'react'
import logo from '../image/logo.svg'
import '../style/header.css'
import { NavLink } from 'react-router-dom';
function Header() {
  let modal = useRef()
 let burger = useRef()
  function openMenu(e){
   modal.current.classList.toggle("show")
   e.target.classList.toggle("active")
    }
  return (
    <header>
       <div ref={modal} className="modal">
       <ul className='menu'>
       <li><NavLink to="/"> HOME</NavLink></li>
                <li><NavLink to="/port">PORTFOLIO</NavLink> </li>
                <li><NavLink to="/contact">CONTACT ME</NavLink> </li>
            </ul>
        
       </div> 
      <div className="container">
        <div className="header_wrapper">
        <img className='hlogo' src={logo} alt="" />
      <div className='faq'>
      <li><NavLink to="/"> HOME</NavLink></li>
                <li><NavLink to="/port">PORTFOLIO</NavLink> </li>
                <li><NavLink to="/contact">CONTACT ME</NavLink> </li>
                <div onClick={(e)=>openMenu(e)}  className="burger">
          <div className='div' ref={burger}></div>
          <div className='div1' ref={burger}></div>
          <div className='div2' ref={burger}></div>
        </div>
            </div>
            </div>
      </div>
    </header>
  )
}

export default Header
