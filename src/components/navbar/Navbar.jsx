import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
const navItems = ['Models', 'Pricing', 'About Us', 'Contact Us', 'Custom Models'] 


  return (
    <nav className='flex gap-6 text-white'>
        {
            navItems.map((item, index) => {
                return <a key={index} >{item}</a>
            })
        }
    </nav>
  )
}

export default Navbar