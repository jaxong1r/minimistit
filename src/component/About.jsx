import React from 'react'
import '../style/about.css'
import man from '../image/about1.jpg'
function About() {
  return (
    <section>
    <div className="container">
        <div className="about_wrapper">
            <img   src={man} alt="" />
            <div className="a_card">
                <h2>About Me</h2>
                <p>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
                <button>GO TO PORTFOLIO</button>
            </div>
        </div>
        </div>  
    </section>
  )
}

export default About
