import React from 'react'
import { NavLink } from 'react-router-dom';

import '../style/footer.css'
function Footer1() {
  return (
    <div>
      <div className="container">
        <div className="f1_wrapper">
            <h2>Interested in doing a project together?</h2>
            <div className="f1_div"></div>
            <button><NavLink to='/contact'>CONTACT ME</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default Footer1
