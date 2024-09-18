import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Detal from '../component/Detal'
import m from '../image/i.jpg'
import m1 from '../image/i1.jpg'
import m2 from '../image/i2.jpg'
import Footer1 from '../component/Footer1'


function InsurePage() {
  return (
    <div>
            <Header />
            <Detal img={m} img1={m1} img2={m2} h2='Insure'chap='Bookmark' ong='Fylo' link1='/book' link2='/flyo' />
<Footer1 />
      <Footer />
      
    </div>
  )
}

export default InsurePage
