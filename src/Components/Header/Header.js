import React from 'react'
import'./Header.css'
import { useState } from 'react'
function Header() {
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    const [toggle, setToggle] =useState(false)
  return (
    <header className='header'>
        <nav className='nav_container'>
            <a href='index.html' className='nav_logo'>Ramya</a>

            <div className={toggle ? "nav_menu show_menu": "nav_menu"}>
                <ul className='nav_list'>
                    <li className='nav_item'>
                        <a href='#home' className='nav_link active-link'>
                            <i className='uil uil-estate nav_icon'>home</i>
                        </a>
                    </li>
                    <li className='nav_item'>
                        <a href='#about' className='nav_link'>
                            <i className='uil uil-user nav_icon'>About</i>
                        </a>
                    </li>
                    <li className='nav_item'>
                        <a href='#skills' className='nav_link'>
                            <i className='uil uil-file-alt nav_icon'>skills</i>
                        </a>
                    </li>
                   
                   
                    <li className='nav_item'>
                        <a href='#contact' className='nav_link'>
                            <i className='uil uil-message nav_icon'>Contact</i>
                        </a>
                    </li>
                </ul>
                
                <i class="uil uil-times nav_close"  onClick={()=>setToggle(!toggle)}></i>
            </div>
            <div className='nav_toggle' onClick={()=>setToggle(!toggle)}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header >
  )
}

export default Header