import React from 'react'
import './Skills.css';
import Frontend from '../Skills/Frontend'
import Backend from '../Skills/Backend'
function Skills() {
  return (
    <section className='skills section' id='skills'>
         <h2 className='section_title' >Skills</h2>
        <span className='section_subtitle'>My technical level</span>

        <div className='skills_container container grid'>
            <Frontend />
            <Backend />
        </div>
      </section>
  )
}

export default Skills