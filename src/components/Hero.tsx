const Hero = () => {
    return (
        <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-40 px-6  bg-black text-white rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.4)]">
        
        <div className="absolute top-0 left-0 w-full h-full area pointer-events-none z-0">
          <ul className="circles">
            {[...Array(10)].map((_, i) => (
              <li key={i}></li>
            ))}
          </ul>
        </div>
  
        <div className="relative z-10 w-full max-w-screen-md mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Built beyond the box.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto mb-6">
            Use AI as a helper, not a creator.
          </p>
          <p className="text-white text-lg font-hand tracking-wide flex items-center justify-center gap-2">
            <span className="text-pink-400 text-2xl">&lt;/&gt;</span> Made by a human
          </p>
        </div>
      </section>
    )
  }
  
  export default Hero
  
  
  
  
  