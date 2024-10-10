import React from 'react'
import logo from '../assets/Logo.png'

import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { FaSquareXTwitter } from 'react-icons/fa6'
import {FaInstagram} from "react-icons/fa"


const Navbar = () => {
  return (
    
    <nav className='mb-10 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt="Logo" />
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/chhatish-kumar-18879a237/"><FaLinkedin className='hover:text-blue-500 hover:scale-125 transition-all duration-200'/></a>
            <a href="https://github.com/ChhatishK"><FaGithub className='hover:text-slate-400 hover:scale-125 transition-all duration-200'/></a>
            <a href="https://x.com/ChhatishKumarY1"><FaSquareXTwitter className='hover:text-slate-600 hover:scale-125 transition-all duration-200'/></a>
            <a href="https://www.instagram.com/_chhatish_yadav/"><FaInstagram className='hover:text-pink-600 hover:scale-125 transition-all duration-200' /></a>
            
        </div>
    </nav>
  )
}

export default Navbar