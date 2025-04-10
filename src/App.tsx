import Hero from './components/Hero'
import Comparison from './components/Comparison'
import Manifest from './components/Manifest'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Hero />
      <Comparison />
      <Manifest />
      <Footer />
    </div>
  )
}

export default App
