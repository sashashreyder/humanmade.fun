const Hero = () => {
    return (
        <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-40 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-950">
        
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

            <p className="text-white text-xl font-orbitron neon-movie text-center">
             <span className="text-pink-400">&lt;</span>
             <span>Made by a human</span>
             <span className="text-pink-400"> /&gt;</span>
         </p>

        </div>
      </section>
    )
}

export default Hero;

  
  
  
  
  