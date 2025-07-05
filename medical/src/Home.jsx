import React, { useState, useEffect } from 'react'

function ProduceGrid({ items, color, type }) {
  return (
    <div>
      <h3 className="text-white text-2xl font-semibold mb-4 flex items-center">
        {type === 'fruit' ? '🍓 Fruits' : '🥕 Vegetables'}
        <span className="ml-2 text-sm bg-green-500 px-2 py-1 rounded-full">
          {items.length} items
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="h-32 flex items-center justify-center text-6xl" style={{backgroundColor: `#${item.color}20`}}>
              {item.emoji}
            </div>
            <div className="p-3">
              <h4 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-semibold">Family:</span> {item.family}</p>
                <p><span className="font-semibold">Genus:</span> {item.genus}</p>
                <div className="flex justify-between pt-2">
                  <span className={`bg-green-100 text-green-800 px-2 py-1 rounded text-xs`}>
                    {item.nutritions.calories} cal
                  </span>
                  <span className={`bg-${type === 'fruit' ? 'orange' : 'purple'}-100 text-${type === 'fruit' ? 'orange' : 'purple'}-800 px-2 py-1 rounded text-xs`}>
                    {item.nutritions.sugar}g sugar
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Home() {
  const [produce, setProduce] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Mountain Landscape",
      description: "Beautiful mountain scenery"
    },
    {
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      title: "Nature View",
      description: "Stunning natural landscape"
    },
    {
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      title: "Scenic Beauty",
      description: "Breathtaking outdoor view"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    // Simulate API call with static data
    setTimeout(() => {
      const produceData = [
        { name: 'Apple', family: 'Rosaceae', genus: 'Malus', nutritions: { calories: 52, sugar: 10.4 }, color: 'ff6b6b', type: 'fruit', emoji: '🍎' },
        { name: 'Banana', family: 'Musaceae', genus: 'Musa', nutritions: { calories: 89, sugar: 12.2 }, color: 'ffd93d', type: 'fruit', emoji: '🍌' },
        { name: 'Orange', family: 'Rutaceae', genus: 'Citrus', nutritions: { calories: 47, sugar: 9.4 }, color: 'ff8c42', type: 'fruit', emoji: '🍊' },
        { name: 'Strawberry', family: 'Rosaceae', genus: 'Fragaria', nutritions: { calories: 32, sugar: 4.9 }, color: 'ff6b9d', type: 'fruit', emoji: '🍓' },
        { name: 'Mango', family: 'Anacardiaceae', genus: 'Mangifera', nutritions: { calories: 60, sugar: 13.7 }, color: 'ffbe0b', type: 'fruit', emoji: '🥭' },
        { name: 'Pineapple', family: 'Bromeliaceae', genus: 'Ananas', nutritions: { calories: 50, sugar: 9.9 }, color: 'f77f00', type: 'fruit', emoji: '🍍' },
        { name: 'Grapes', family: 'Vitaceae', genus: 'Vitis', nutritions: { calories: 62, sugar: 16.3 }, color: '9b59b6', type: 'fruit', emoji: '🍇' },
        { name: 'Watermelon', family: 'Cucurbitaceae', genus: 'Citrullus', nutritions: { calories: 30, sugar: 6.2 }, color: '2ecc71', type: 'fruit', emoji: '🍉' },
        { name: 'Carrot', family: 'Apiaceae', genus: 'Daucus', nutritions: { calories: 41, sugar: 4.7 }, color: 'ff8c42', type: 'vegetable', emoji: '🥕' },
        { name: 'Broccoli', family: 'Brassicaceae', genus: 'Brassica', nutritions: { calories: 34, sugar: 1.5 }, color: '2ecc71', type: 'vegetable', emoji: '🥦' },
        { name: 'Tomato', family: 'Solanaceae', genus: 'Solanum', nutritions: { calories: 18, sugar: 2.6 }, color: 'e74c3c', type: 'vegetable', emoji: '🍅' },
        { name: 'Cucumber', family: 'Cucurbitaceae', genus: 'Cucumis', nutritions: { calories: 16, sugar: 1.7 }, color: '2ecc71', type: 'vegetable', emoji: '🥒' },
        { name: 'Bell Pepper', family: 'Solanaceae', genus: 'Capsicum', nutritions: { calories: 31, sugar: 4.2 }, color: 'f39c12', type: 'vegetable', emoji: '🫑' },
        { name: 'Spinach', family: 'Amaranthaceae', genus: 'Spinacia', nutritions: { calories: 23, sugar: 0.4 }, color: '27ae60', type: 'vegetable', emoji: '🥬' },
        { name: 'Potato', family: 'Solanaceae', genus: 'Solanum', nutritions: { calories: 77, sugar: 0.8 }, color: 'd4a574', type: 'vegetable', emoji: '🥔' },
        { name: 'Onion', family: 'Amaryllidaceae', genus: 'Allium', nutritions: { calories: 40, sugar: 4.2 }, color: 'e8c547', type: 'vegetable', emoji: '🧅' }
      ]
      setProduce(produceData)
      setLoading(false)
    }, 1000)
  }, [])

  const fruits = produce.filter(item => item.type === 'fruit')
  const vegetables = produce.filter(item => item.type === 'vegetable')

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* Image Slider */}
        <div className="relative w-[99.99%] h-[500px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt={slide.title}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <h3 className="text-white text-2xl font-bold mb-2">{slide.title}</h3>
                <p className="text-white/90">{slide.description}</p>
              </div>
            </div>
          ))}
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Fruits & Vegetables Display Section */}
        <div className="bg-blue-500 w-full min-h-screen flex items-center justify-center py-8">
          <div className="w-[98%] bg-purple-700 rounded p-6 overflow-auto">
            <h2 className="text-white text-3xl font-bold text-center mb-6">🍎🥕 Fresh Fruits & Vegetables Collection</h2>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-white text-xl">🔄 Loading fresh produce...</div>
              </div>
            ) : (
              <div className="space-y-8">
                <ProduceGrid items={fruits} color="orange" type="fruit" />
                <ProduceGrid items={vegetables} color="purple" type="vegetable" />
              </div>
            )}
          </div>
        </div>

        {/* Your original sections */}
        <div className="bg-yellow-500 w-full h-screen flex items-center justify-center">
          <div className="h-screen bg-blue-400 flex flex-1 items-center justify-center">
            <div className="h-[90%] w-[90%] bg-fuchsia-300 border rounded"></div>
          </div>
          <div className="h-screen bg-red-400 flex flex-2 items-center justify-center">
            <div className="h-[95%] w-[90%] bg-fuchsia-300 border rounded"></div>
          </div>
          <div className="h-screen bg-yellow-400 flex items-center justify-center flex-1">
            <div className="h-[90%] w-[90%] bg-fuchsia-300 border rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home