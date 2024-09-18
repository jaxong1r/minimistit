import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Detal from '../component/Detal'
import m from '../image/f.jpg'
import m1 from '../image/f1.jpg'
import m2 from '../image/f2.jpg'
import Footer1 from '../component/Footer1'

function FlyoPage() {
  return (
    <div>
              <Header />
              <Detal img={m} img1={m1} img2={m2} h2='Fylo'chap='Insure' ong='Manage' link1='/insure' link2='/manage' />
      <Footer1 />
      <Footer />

      
    </div>
  )
}

export default FlyoPage
