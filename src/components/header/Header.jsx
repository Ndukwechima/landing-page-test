import React from 'react'
import Navbar from '../navbar/Navbar'
import logo from '../../assets/images/logo.png'
import HeaderButtons from './HeaderButtons';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-[#04142b] h-24 px-4 md:px-20">
        <div>
          <img src={logo} alt="Header Logo" className="w-6 h-6" />
        </div>
        <Navbar />
        <HeaderButtons />
    </header>
  );
}

export default Header