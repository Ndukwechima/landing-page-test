import React from 'react'
import Scroll from './Scroll';

const SubHero = () => {
  return (
    <section>
      <div>
        <div>
          <p className='text-sm text-gray-500 text-center py-4'>Join 4,000+ companies already growing</p>
        </div>
        {/* Scroll */}
        <Scroll />
      </div>
    </section>
  );
}

export default SubHero