import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Detal from '../component/Detal'
 

import m from '../image/b.jpg'
import m1 from '../image/b1.jpg'
import m2 from '../image/b2.jpg'
import Footer1 from '../component/Footer1'

function BookPage() {
  return (
    <div>
            <Header />
            <Detal img={m} img1={m1} img2={m2} h2='Bookmark'chap='Manage' ong='Insure' link1='/manage' link2='/insure' />
      <Footer1 />
    <Footer />      
    </div>
  )
}

export default BookPage
