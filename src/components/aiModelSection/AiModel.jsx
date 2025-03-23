import React from 'react'
import ModelCategory from './ModelCategory';

const AiModel = () => {
  return (
    <section className="relative flex flex-col items-center justify-center mt-[8rem] text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4 text-[#04142b]">
        AI Models tailored for your
      </h1>
      <h1 className="text-5xl font-semibold mb-4 text-[#04142b]">
        business needs
      </h1>
      <p className="text-lg max-w-2xl mb-6 pt-3 text-gray-500">
        Leverage the power of AI to automate, analyze, and optimize your
        workflows. Our
      </p>
      <p className="-mt-4 text-gray-500">
        specialized models are designed to fit different business needs
      </p>
   {/* Model Category */}
   <div>
    <ModelCategory />
   </div>
    </section>
  );
}

export default AiModel