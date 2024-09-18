import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

import Port1 from '../component/Port1'
import p1 from '../image/port1.svg'
import p2 from '../image/port2.svg'
import p3 from '../image/port3.svg'
import p4 from '../image/port4.svg'
import Port2 from '../component/Port2'
import Footer1 from '../component/Footer1'

function Portfolio() {
  return (
    <div>
      <Header />
      
      <Port1 img={p1} h2='Manage' link='/manage' />
      <Port2 img={p2} h2="Bookmark" link='/book' />
      <Port1 img={p3} h2='Manage' link='/insure' />
      <Port2 img={p4} h2="Flyo" link='/flyo'/>
      <Footer1 />
      <Footer />
    </div>
  )
}

export default Portfolio
