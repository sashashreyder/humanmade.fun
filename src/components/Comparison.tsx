const Comparison = () => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20 px-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Template-made</h2>
          <p className="text-gray-400">Generic layout. Safe colors. Button that says “Click here”.</p>
        </div>
        <div className="bg-gradient-to-tr from-purple-600 to-indigo-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
          <h2 className="text-2xl font-bold mb-2">Human-made</h2>
          <p className="text-white">Unexpected layout. Bold energy. Button that says “Live a little”.</p>
        </div>
      </section>
    )
  }
  
  export default Comparison
  