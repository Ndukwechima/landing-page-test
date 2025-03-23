import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
const navItems = ['Models', 'Pricing', 'About Us', 'Contact Us', 'Custom Models'] 


  return (
    <nav className=" gap-6 text-white hidden lg:flex">
      {navItems.map((item, index) => {
        return <a key={index}>{item}</a>;
      })}
    </nav>
  );
}

export default Navbar