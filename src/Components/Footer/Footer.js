import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer className='footer'>
        <div className='footer_container container'>
            <h1 className='footer_title'>Ramya</h1>
            <ul className='footer_list'>
                <li>
                    <a href='#about ' className='footer_link'>About</a>
                </li>

                <li>
                    <a href='#project ' className='footer_link'>project</a>
                </li>

                <li>
                    <a href='#contact ' className='footer_link'>contact</a>
                </li>
            </ul>
            <div className='footer_social'>
            <a href='#contact' className='home_social-icon' >
              <i class="uil uil-envelope-alt"></i>
            </a>

            <a href='https://github.com/RamyaDas17' className='home_social-icon' target='_blank'>
             <i class="uil uil-github-alt"></i>
            </a>

            <a href='https://www.linkedin.com/in/ramyak17/' className='home_social-icon' target='_blank'>
            <i class="uil uil-linkedin-alt"></i>
            </a>
            </div>

            <span className='footer_copy'>
            &#169;  All rigths reserved 
           </span>
        </div>
    </footer>
  )
}

export default Footer