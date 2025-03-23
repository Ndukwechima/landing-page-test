const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-white text-center px-6"
      style={{
        background:
          "radial-gradient(circle at bottom, #0228A4 10%, #04142b 50%)",
      }}
    >
      <h1 className="text-6xl font-bold mb-4">
        AI Models for Business Solutions
      </h1>
      <h1 className="text-6xl font-semibold mb-4">Business Solutions</h1>
      <p className="text-lg max-w-2xl mb-6 pt-3">
        Leverage the power of AI to automate, analyze, and optimize your
        workflows. Our
      </p>
      <p className="-mt-4">
        specialized models are designed to fit different business needs
      </p>
      <button className="bg-white text-[#04142b] text-sm px-4 py-1.5 rounded mt-5">
        Get Started Now
      </button>
    </section>
  );
};

export default Hero;
