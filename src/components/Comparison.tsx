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
    <section id="comparison" className="py-10 px-6 text-white text-center relative">
      <div className="flex justify-center items-center gap-30 mb-20 mt-10">
        <button
          className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer 
          ${!isHuman
              ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              : 'bg-transparent text-gray-500 hover:bg-transparent'
          } border border-gray-300`}
          onClick={() => handleClick('template')}
        >
          Template
        </button>
        <button
          className={`relative px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer 
          ${isHuman
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

      {isHuman && (
        <div
          className="relative p-8 rounded-lg shadow-xl mt-10 overflow-hidden"
          style={{
            backgroundImage: "url('/src/assets/coolbackgrounds-fractalize-sea_edge.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        >
          <h2 className="text-4xl mt-6 mb-4 font-semibold text-white" style={{ fontFamily: 'Merienda, sans-serif' }}>
            Human Side
          </h2>
          <p className="text-xl mb-10">
            Creative, original ideas that come from the human soul and mind.
          </p>

          <div className="relative z-10 flex flex-wrap justify-between items-center gap-12 ml-20 mb-10">
            <div className="flex items-center mb-4 group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 animate-pulse rounded-full flex items-center justify-center mr-4">
                <img src="/src/assets/free-icon-abstract-art-14698180.png" alt="abstract art" className="w-12 h-12" />
              </div>
              <span className="text-lg opacity-0 group-hover:opacity-100 group-hover:scale-120 group-hover:transition-all group-hover:duration-300 transform group-hover:relative group-hover:top-8 right-25">
                EMOTIONAL
              </span>
            </div>

            <div className="flex items-center mb-4 group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 animate-pulse rounded-full flex items-center justify-center mr-4">
                <img src="/src/assets/free-icon-artbook-14701758.png" alt="artbook" className="w-12 h-12" />
              </div>
              <span className="text-lg opacity-0 group-hover:opacity-100 group-hover:scale-120 group-hover:transition-all group-hover:duration-300 transform group-hover:relative group-hover:top-8 right-23.5">
                CREATIVE
              </span>
            </div>

            <div className="flex items-center mb-4 group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 animate-pulse rounded-full flex items-center justify-center mr-4">
                <img src="/src/assets/free-icon-digital-art-12493083.png" alt="digital art" className="w-12 h-12" />
              </div>
              <span className="text-lg opacity-0 group-hover:opacity-100 group-hover:scale-120 group-hover:transition-all group-hover:duration-300 transform group-hover:relative group-hover:top-8 right-25">
                DIFFERENT
              </span>
            </div>
          </div>

          <a href="https://asoftmurmur.com/" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 mt-4 mb-6 bg-pink-400 text-white rounded-full text-lg hover:bg-pink-500 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg cursor-pointer relative z-10">
              Enjoy the moment →
            </button>
          </a>
        </div>
      )}
    </section>
  );
};

export default Comparison;


























  