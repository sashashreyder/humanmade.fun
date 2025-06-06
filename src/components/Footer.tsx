const Footer = () => {
    return (
      <footer className="py-10 text-gray-500 text-sm bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 relative">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="hidden sm:flex sm:space-x-6">
            <a 
              href="https://www.linkedin.com/in/sashashreider/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:underline"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/sashashreyder" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:underline"
            >
              GitHub
            </a>
            <span className="text-white">React + TypeScript, Tailwind</span>
            <a href="https://www.canva.com" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
              Canva.com - Video Background
            </a>
            <a href="https://www.flaticon.com/" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
              Flaticon.com - Icons
            </a>
            <span className="text-white">
              Anonymous for animated Tailwind background:{" "}
              <a href="https://tailwindflex.com/@anonymous/background-animation" className="text-white hover:underline">
                source
              </a>
            </span>
            <span className="text-white">ChatGPT for assistance in speeding up my work</span>
          </div>
  
          <p className="text-center mt-2 sm:mt-8 sm:mb-8 text-white">
            Inspired by #CanvaCreate.  
            Coded with soul by Aleksandra Shreider.
          </p>

          <div className="text-center sm:hidden">
            <span className="text-white">sashafrontenddev@gmail.com</span>
          </div>
          
        </div>

        <div className="absolute bottom-4 right-4">
          <img 
            src="/assets/Developed-By-Human-Not-By-AI-Badge-white@2x.png" 
            alt="Developed by Human, Not by AI" 
            className="w-15 sm:w-25 md:w-35 lg:w-56"
          />
        </div>
      </footer>
    );
};

export default Footer;


  
  
  
  
  
  
  