import { useState } from 'react';

const Comparison = () => {
  const [isHuman, setIsHuman] = useState(true);
  const [showParticles, setShowParticles] = useState(false);

  const handleClick = (type: string) => {
    setIsHuman(type === 'human');
    
    if (type === 'human') {
        setShowParticles(false); 
        setTimeout(() => {
          setShowParticles(true); 
        }, 50); 
        setTimeout(() => setShowParticles(false), 3000); 
      }
    };

  return (
    <section className="py-20 px-6 text-white text-center">
      
      <div className="flex justify-center items-center gap-20 mb-10">
        <button
          className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
            !isHuman
              ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              : 'bg-transparent text-gray-500 hover:bg-transparent'
          } border border-gray-300`}
          onClick={() => handleClick('template')}
        >
          Template
        </button>
        <button
          className={`relative px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
            isHuman
              ? 'bg-blue-600 text-white hover:bg-blue-500 transform hover:scale-115'
              : 'bg-transparent text-gray-500 hover:bg-transparent'
          } border border-blue-600`}
          onClick={() => handleClick('human')}
        >
          Human
          
          {showParticles && (
            <div className="absolute inset-0 flex justify-center items-center z-10">
              
              <div className="particle w-6 h-6 bg-indigo-300 rounded-full opacity-75 absolute" style={{ top: '-15px', left: '25px' }}></div>
              <div className="particle w-6 h-6 bg-teal-400 rounded-full opacity-75 absolute" style={{ top: '20px', left: '-30px' }}></div>
              <div className="particle w-8 h-8 bg-gray-400 rounded-full opacity-75 absolute" style={{ top: '-25px', left: '-30px' }}></div>
              <div className="particle w-5 h-5 bg-lime-400 rounded-full opacity-75 absolute" style={{ top: '-40px', left: '50px' }}></div>
              <div className="particle w-4 h-4 bg-pink-300 rounded-full opacity-75 absolute" style={{ top: '-45px', left: '25px' }}></div>
              <div className="particle w-6 h-6 bg-sky-400 rounded-full opacity-75 absolute" style={{ top: '35px', left: '70px' }}></div>
              <div className="particle w-7 h-7 bg-violet-400 rounded-full opacity-75 absolute" style={{ top: '15px', left: '100px' }}></div>
              <div className="particle w-6 h-6 bg-amber-400 rounded-full opacity-75 absolute" style={{ top: '-20px', left: '80px' }}></div>
            </div>
          )}
        </button>
      </div>
    </section>
  );
};

export default Comparison;


















  