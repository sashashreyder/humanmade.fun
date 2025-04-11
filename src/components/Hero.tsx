const Hero = () => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-77 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-950">
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black blur-background"></div>

      <div className="absolute top-0 left-0 w-full h-full area pointer-events-none z-0">
        <ul className="circles">
          {[...Array(10)].map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 w-full max-w-screen-md mx-auto px-4">
        <h1 className="text-5xl font-bold font-inter mb-4">
          Built beyond the box.
        </h1>

        <p className="text-lg sm:text-lg text-gray-300 max-w-xl mx-auto mb-6">
          Use AI as a helper, not a creator.</p> 

          <p className="text-white text-xl sm:text-md md:text-xl font-orbitron neon-movie text-center">
           <span className="text-pink-400">&lt;</span>
           <span>Made by a human</span>
          <span className="text-pink-400"> /&gt;</span>
        </p>
      </div>

      <div className="absolute bottom-65 z-10">
        <a href="#comparison" className="text-white text-4xl animate-bounce">
          <svg className="w-8 h-8 text-pink-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7 7 7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;



  
  
  
  
  