import React from 'react'
import { useState } from 'react';
import'./Project.css';

function Project() {
  const[toggleState, setToggleState] = useState(0);

  const toggleTab =(index)=>{
      setToggleState(index)
  }
  return (
    <section className='Project section' id='project'>
        <h2 className='section_title' >Projects</h2>
    <span className='section_subtitle'>what i offer</span>


    <div className='project_container container grid'>
     
      <div className='projects_content'>
            <div> 
                <i className='uil uil-clipboard-notes projects_icon'></i>
                <h3 className='projects_title'>Task Manager App</h3>
            </div>
            
            <span className='project_desc_button ' onClick={() => toggleTab(1)}>View More{""}
              <i className='uil uil-arrow-right project_button-icon'></i>
            </span>
            <div className='button_container'>
            <a  href="https://github.com/RamyaDas17/task-management-app" className='project_button'>Github</a>
            <a  href="https://ramyadas17.github.io/task-management-app/" className='project_button'>Live Demo</a>
            
          </div>
            <div className={toggleState === 1 ? 'project__modal active-modal' : 'project__modal'}>
                <div className='project_modal-content'>
                    <i onClick={ () => toggleTab(0)}
                    className='uil uil-times project_modal-close'>
                    </i>

                    <h3 className='project_modal-title'>Task Manager App</h3>
                    <p className='project_modal-description'>
                    Effortlessly manage tasks with dynamic categories, Firebase integration, ensuring accessibility, reliability, and streamlined workflow for enhanced productivity.
                    </p>

                    <ul className='project_modal-projects grid'>
                        <li className='project_modal-project'>
                            <i className='uil uil-check-circle'></i>
                            <p className='project_modal-info'>
                            Firebase Integration: Seamlessly store tasks and their categories in Firebase database.
                            </p>
                        </li>

                        <li className='project_modal-project'>
                            <i className='uil uil-check-circle'></i>
                            <p className='project_modal-info'>
                            Dynamic Categories: Organize tasks efficiently using dynamic category tabs.
                            </p>
                        </li>

                        <li className='project_modal-project'>
                            <i className='uil uil-check-circle'></i>
                            <p className='project_modal-info'>
                            Task Management: Easily create, select, and manage tasks under chosen categories.
                            </p>
                        </li>

                        <li className='project_modal-project'>
                            <i className='uil uil-check-circle'></i>
                            <p className='project_modal-info'>
                            Efficient Workflow: Filter tasks by selecting category tabs for focused productivity.
                            </p>
                        </li>

                        <li className='project_modal-project'>
                            <i className='uil uil-check-circle'></i>
                            <p className='project_modal-info'>
                            Comprehensive Overview: View all tasks collectively in the 'All' tab for effective planning
                            </p>
                        </li>
                        <li className='project_modal-project'>
                            <i className='uil uil-check-circle'></i>
                            <p className='project_modal-info'>
                            Data Integrity: Ensure reliability with secure storage of tasks in Firebase database
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div className='projects_content'>
            <div> 
                <i className='uil uil-bag-alt projects_icon'></i>
                <h3 className='projects_title'>Portfolio</h3>
            </div>
            
            <span className='project_desc_button ' onClick={() => toggleTab(2)}>View More{""}
              <i className='uil uil-arrow-right project_button-icon'></i>
            </span>
            <div className='button_container'>
            <a  href="https://github.com/RamyaDas17/portfolio" className='project_button'>Github</a>
            <a  href="https://ramyadas17.github.io/portfolio/" className='project_button'>Live Demo</a>
            
          </div>
            <div className={toggleState === 2 ? 'project__modal active-modal' : 'project__modal'}>
                <div className='project_modal-content'>
                    <i onClick={ () => toggleTab(0)}
                    className='uil uil-times project_modal-close'>
                    </i>

                    <h3 className='project_modal-title'>Portfolio</h3>
                    <p className='project_modal-description'>
                    Hey there! Welcome to my portfolio. Here, you'll find everything you need to know about me and what I bring to the table. From my background and qualifications to the skills I've honed , it's all here for you to explore.
                    </p>

                    <ul className='project_modal-projects grid'>
                        <li className='project_modal-project'>
                            <i className='uil uil-check-circle'></i>
                            <p className='project_modal-info'>
                            Hello there!: Feel free to reach out or say hello through the contact section.
                            </p>
                        </li>

                        <li className='project_modal-project'>
                            <i className='uil uil-check-circle'></i>
                            <p className='project_modal-info'>
                            A Bit About Me: Dive into my background and what makes me tick.
                            </p>
                        </li>

                        <li className='project_modal-project'>
                            <i className='uil uil-check-circle'></i>
                            <p className='project_modal-info'>
                            My Qualifications: Take a look at my educational and professional journey.
                            </p>
                        </li>
                        <li className='project_modal-project'>
                            <i className='uil uil-check-circle'></i>
                            <p className='project_modal-info'>
                            Skills I Bring: Discover the key competencies and strengths I possess.
                            </p>
                        </li>

                        <li className='project_modal-project'>
                            <i className='uil uil-check-circle'></i>
                            <p className='project_modal-info'>
                            Let's Connect: I'm here to engage with you and discuss any opportunities.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
      
    </div>
    </section>
  )
}

export default Project
