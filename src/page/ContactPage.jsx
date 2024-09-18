import React from 'react'
import logo from '../image/contact.png'
import '../style/contact.css'

function ContactPage() {
  return (
    
    <section className='contact'>
     <div className="container">
     <div className="con__hero">
        <div className="con__chziq">

        </div>


        <div className="con__wrapper">
        <div className="con__text">
        <h2>Get in Touch</h2>
        </div>
          <div className="con__content">
            <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>



            <img src={logo} alt="" />
          </div>
        </div>
        <div className="con__chziq"></div>


        <div className="con__wrapper">
         <div className="con__text">
         <h2>Contact Me</h2>
         </div>
          <div className="con__content2">
            <span>NAME</span>
            <input type="text" placeholder='Jane Appleseed' />
            <span>Email Address </span>
            <input type="email" placeholder='email@example.com' />
            <span>Message</span>
             <textarea name="are" id="" cols="30" rows="10" placeholder='How can I help?'></textarea>
             <button>SEND MESSAGE</button>
          </div>
        </div>

      </div>
     </div>
      
    </section>
  )
}

export default ContactPage
