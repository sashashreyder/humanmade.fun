import { useState } from 'react';

const Comparison = () => {
  const [isHuman, setIsHuman] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [isTemplate, setIsTemplate] = useState(true);

  const handleClick = (type: string) => {
    setIsHuman(type === 'human');
    setIsTemplate(type === 'template');

    if (type === 'human') {
      setShowParticles(false);
      setTimeout(() => {
        setShowParticles(true);
      }, 50);
      setTimeout(() => setShowParticles(false), 3000);
    }
  };

  return (
    <section id="comparison" className="px-6 text-white text-center relative">
      <div className="flex justify-center items-center gap-8 mt-10 sm:flex-row sm:gap-6">
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
          className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer
            ${isHuman
            ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg'
            : 'bg-pink-400 text-white-500 hover:bg-pink-500 hover:text-white'}
            hover:scale-105 `}
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
        <div className="relative p-8 rounded-lg shadow-xl mt-10 overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/videobg.mp4"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            style={{ pointerEvents: 'none' }}
          />

          <h2 className="text-4xl mt-6 mb-4 font-semibold text-white" style={{ fontFamily: 'Merienda, sans-serif', position: 'relative', zIndex: 1 }}>
            Human Side
          </h2>
          <p className="text-l mb-20" style={{ position: 'relative', zIndex: 1 }}>
            Tap on the icons to see the masterpieces. <br />
            Creative and original ideas that come from the human soul and mind.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center sm:justify-between items-center gap-12 sm:gap-8 ml-5 sm:ml-15 mr-0 sm:mr-15 mb-15">
            <a href="https://www.paffi.it/" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center mb-4 group relative">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 animate-pulse rounded-full flex items-center justify-center mr-4">
                  <img src="/assets/free-icon-abstract-art-14698180.png" alt="abstract art" className="w-12 h-12" />
                </div>
                <span className="text-lg hidden group-hover:opacity-100 group-hover:scale-120 group-hover:transition-all group-hover:duration-300 transform group-hover:relative group-hover:top-8 right-25">
                  EMOTIONAL
                </span>
              </div>
            </a>

            <a href="https://tryboredcow.com/" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center mb-4 group relative">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 animate-pulse rounded-full flex items-center justify-center mr-4">
                  <img src="/assets/free-icon-artbook-14701758.png" alt="artbook" className="w-12 h-12" />
                </div>
                <span className="text-lg hidden group-hover:opacity-100 group-hover:scale-120 group-hover:transition-all group-hover:duration-300 transform group-hover:relative group-hover:top-8 right-23.5">
                  CREATIVE
                </span>
              </div>
            </a>

            <a href="https://immersive-g.com/" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center mb-4 group relative">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 animate-pulse rounded-full flex items-center justify-center mr-4">
                  <img src="/assets/free-icon-digital-art-12493083.png" alt="digital art" className="w-12 h-12" />
                </div>
                <span className="text-lg hidden group-hover:opacity-100 group-hover:scale-120 group-hover:transition-all group-hover:duration-300 transform group-hover:relative group-hover:top-8 right-25">
                  DIFFERENT
                </span>
              </div>
            </a>
          </div>

          <a href="https://www.rainymood.com/" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 mt-4 mb-6 bg-pink-400 text-white rounded-full text-lg hover:bg-pink-500 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg cursor-pointer relative z-10">
              Enjoy the moment →
            </button>
          </a>
        </div>
      )}

      {isTemplate && (
        <div className="relative p-8 rounded-lg shadow-xl mt-10 overflow-hidden bg-gray-100">
          <h2 className="text-4xl mt-2 mb-10 font-semibold text-gray-800">
            Template Section
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-8">
            
          <div className="w-full ml-0 sm:ml-20 sm:w-1/2 pr-0 sm:pr-6 pl-0 sm:pl-6">
              <p className="text-lg mb-8 text-left text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eros ut risus feugiat, non tincidunt eros vulputate. Ut tristique ante et turpis volutpat, sit amet volutpat nunc malesuada. Aenean ut nibh in sapien lacinia elementum.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eros ut risus feugiat, non tincidunt eros vulputate. Ut tristique ante et turpis volutpat, sit amet volutpat nunc malesuada. Aenean ut nibh in sapien lacinia elementum.
              </p>
            </div>
            
            <div className="w-full sm:w-1/2 pl-0 sm:pl-6 flex justify-center items-center flex-col">
              <div className="w-full sm:w-46 h-46 mb-6 bg-gray-300 flex justify-center items-center rounded-lg">
                <span className="text-xl text-gray-500">Your Image Here</span>
              </div>
              <button className="w-full sm:w-auto px-10 py-2 mb-5 bg-gray-500 text-white rounded-full text-lg hover:bg-gray-600 transition-all duration-300 ease-in-out shadow-lg cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Comparison;
