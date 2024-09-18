import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Detal from '../component/Detal'
import m from '../image/m.jpg'
import m1 from '../image/m1.jpg'
import m2 from '../image/m2.jpg'
import Footer1 from '../component/Footer1'


function ManagePage() {
  return (
    <div>
      <Header />
     <Detal img={m} img1={m1} img2={m2} h2='Manage'chap='Fylo' ong='Bookmark' link1='/flyo' link2='/book' />
<Footer1 />
<Footer />

    </div>
  )
}

export default ManagePage
