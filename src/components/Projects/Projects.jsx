import React from 'react'
import Card from '../Card/Card'
import va from '../../assets/va.png'
import fw from '../../assets/fw.png'
import cb from '../../assets/cb.png'
import tti from '../../assets/tti.png'
import br from '../../assets/br.png'
import ise from '../../assets/ise.png'
import './Projects.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
  useGSAP(() => {
    gsap.from('#para', {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '#para',
        scroll: 'body',
        scrub: 2,

        start: 'top 80%',
        end: 'top 30%',
      },
    })
    gsap.from('.slider', {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.slider',
        scroll: 'body',
        scrub: 2,

        start: 'top 80%',
        end: 'top 30%',
      },
    })
  })
  return (
    <div id="projects">
      <h1 id="para"> EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card title=" AI VIRTUAL ASSISTANT" image={va} />

        <Card title="AI CHATBOT" image={cb} />
        <Card title="AI TEXT TO IMAGE" image={tti} />
      </div>
    </div>
  )
}

export default Projects
