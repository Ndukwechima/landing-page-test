import React from 'react'

const HeaderButtons = () => {
  return (
    <div className="space-x-3">
      <button
        className="text-white outline border-1
       border-white px-6 py-1 rounded
       text-sm "
      >
        Login
      </button>
      <button className="bg-white text-[#04142b] text-sm px-4 py-1.5 rounded">
        Get Started Now
      </button>
    </div>
  );
}

export default HeaderButtons