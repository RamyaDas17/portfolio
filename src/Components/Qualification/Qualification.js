import React from 'react'
import { useState } from 'react';
import './Qualification.css';
function Qualification() {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab =(index)=>{
        setToggleState(index)
    }
  return (
    <section className='qualification section'>
        <h2 className='section_title' >Qualification</h2>
        <span className='section_subtitle'>My personal journey</span>

        <div className='qualification_container container'>
            <div className='qualification_tabs'>
                
                <div className={toggleState === 1 
                 ?" qualification_button qualification_active button--flex "
                 : "qualification_button button--flex"
                 } onClick={()=> toggleTab(1)}>
                   <i className='uil uil-graduation-cap qualification_icon'>Education</i>{" "}
                </div>

                <div  className={toggleState === 2
                 ?" qualification_button qualification_active button--flex "
                 : "qualification_button button--flex"
                 } onClick={()=> toggleTab(2)}>
                    <i className='uil uil-briefcase-alt qualification_icon'>Certifications</i>{" "}
                </div>

            </div>
            <div className='qualification_sections'>
                <div className={
                    toggleState === 1 
                    ? "qualification_content qualification_content-active"
                    : "qualification_content"
                    }>
                    <div className='qualification_data'>
                          

                        <div>
                             <h3 className='qualification_title'>BSc.Computer Science</h3>
                             <span className='qualification_subtitle'>Sona College Of Arts and Science </span>
                            <div className='qualification_calender'>
                              <i className='uil uil-calender-alt'>2020 - 2023</i>
                            </div>
                        </div>
                        
                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>
                        <div></div>
                    </div>
                    <div className='qualification_data'>
                          <div></div>
                          <div>
                         <span className='qualification_rounder'></span>
                         <span className='qualification_line'></span>
                        </div>
                        <div>
                             <h3 className='qualification_title'>XII std</h3>
                             <span className='qualification_subtitle'> Jayarani Matricular Higher Secondary School</span>
                            <div className='qualification_calender'>
                              <i className='uil uil-calender-alt'>2019-2020</i>
                            </div>
                        </div>
                        
                    </div>
                    <div className='qualification_data'>
                       

                        <div>
                            <h3 className='qualification_title'>X std</h3>
                            <span className='qualification_subtitle'> Jayarani Matriculation</span>
                            <div className='qualification_calemder'>
                                <i className='uil uil-calender-alt'>2017-2018</i>
                            </div>
                        </div>
                        <div>
                         <span className='qualification_rounder'></span>
                         <span className='qualification_line'></span>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className={
                    toggleState === 2 
                    ? "qualification_content qualification_content-active"
                    : "qualification_content"
                    }>
                    <div className='qualification_data'>
                       

                        <div>
                            <h3 className='qualification_title'>Udemy</h3>
                            <span className='qualification_subtitle'>The complete 2024 Web Development Bootcamp</span>
                            <div className='qualification_calemder'>
                                <i className='uil uil-calender-alt'>Feb 2024</i>
                            </div>
                        </div>
                        <div>
                         <span className='qualification_rounder'></span>
                         <span className='qualification_line'></span>
                        </div>
                        <div></div>
                    </div>
                    <div className='qualification_data'>
                    <div></div>
                          <div>
                         <span className='qualification_rounder'></span>
                         <span className='qualification_line'></span>
                        </div>
                        <div>
                             <h3 className='qualification_title'>Novitech R&D</h3>
                             <span className='qualification_subtitle'> MasterClass in Full Stack Development</span>
                            <div className='qualification_calender'>
                              <i className='uil uil-calender-alt'>April 2024</i>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}

export default Qualification