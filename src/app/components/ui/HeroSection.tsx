import React from "react";

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center " 
      style={{ backgroundImage: "url('assets/images/banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
  
      <div className="absolute inset-0 bg-black opacity-40"></div>

   
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Your One-Stop Shop for Moms & Kids!
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Discover the best products for your little ones and yourself.
        </p>
        <a 
          href="#" 
          className="bg-[#578FCA] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#3674B5] transition-colors"
        >
          Shop Now
        </a>
      </div>
    </section>

  );
};

export default HeroSection;
