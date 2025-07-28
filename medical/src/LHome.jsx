import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProduceGrid({ items, type, limit, showViewMore }) {
  const displayedItems = limit ? items.slice(0, limit) : items;

  return (
    <div>
      <h3 className="text-black text-2xl font-semibold mb-4 flex items-center">
        {type === "fruit"
          ? "🍓 Fruits"
          : type === "vegetable"
          ? "🥕 Vegetables"
          : type === "dryfruit"
          ? "🌰 Dry Fruits"
          : type === "dairy"
          ? "🥛 Dairy"
          : "Produce"}
        <span className="ml-2 text-sm bg-green-500 px-2 py-1 rounded-full">
          {items.length} items
        </span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {displayedItems.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden border-4 border-gray-500 transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute top-2 left-2 bg-yellow-300 text-yellow-900 px-2 py-1 rounded text-xs font-semibold z-10 shadow">
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </div>

            <Link to={`/product/${encodeURIComponent(item.name)}`}>
              <div className="h-52 w-full overflow-hidden bg-pink-100 cursor-pointer">
                <img
                  src={`/src/assets/${item.imageKey}.jpg`}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>

            <div className="p-4">
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {item.name}
              </h4>
              <div className="pt-2 text-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">
                  NPR {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showViewMore && (
        <div className="text-center mt-4">
          <Link
            to={`/${type}s`}
            className="text-black underline hover:text-green-300 transition"
          >
            View More
          </Link>
        </div>
      )}
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const [userFullName, setUserFullName] = useState('');

  // Secure login check and get user full name
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const cookies = document.cookie.split(";").map((c) => c.trim());
    const hasLoginCookie = cookies.includes("loggedIn=true");

    if (!isLoggedIn || !hasLoginCookie) {
      alert("You must be logged in to access this page.");
      navigate("/signup");
    }

    // Get user's full name from cookies or localStorage
    const fullNameFromCookie = cookies
      .find(row => row.startsWith("userFullName="))
      ?.split("=")[1];
    
    const fullNameFromStorage = localStorage.getItem("userFullName");
    
    setUserFullName(
      decodeURIComponent(fullNameFromStorage || fullNameFromCookie || "")
    );
  }, [navigate]);

  const [produce, setProduce] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: "/carousal1.png",
      title: "Welcome to Our Store",
      description: "We present you a variety of fresh produce",
    },
    {
      image: "/veg.png",
      title: "Fresh Vegetables",
      description: "Direct from the farm to your table",
    },
    {
      image: "/fruit.jpg",
      title: "Fresh Fruits",
      description: "The Best Ones for Your Health",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 50);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (idx) => {
    if (idx !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(idx);
        setIsTransitioning(false);
      }, 50);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setProduce([
        { name: "Apple", imageKey: "apple", type: "fruit", price: 120 },
        { name: "Banana", imageKey: "banana", type: "fruit", price: 90 },
        { name: "Orange", imageKey: "orange", type: "fruit", price: 100 },
        { name: "Strawberry", imageKey: "strawberry", type: "fruit", price: 150 },
        { name: "Mango", imageKey: "mango", type: "fruit", price: 130 },
        { name: "Pineapple", imageKey: "pineapple", type: "fruit", price: 160 },
        { name: "Grapes", imageKey: "grapes", type: "fruit", price: 110 },
        { name: "Watermelon", imageKey: "watermelon", type: "fruit", price: 140 },
        { name: "Carrot", imageKey: "carrot", type: "vegetable", price: 60 },
        { name: "Broccoli", imageKey: "broccoli", type: "vegetable", price: 80 },
        { name: "Tomato", imageKey: "tomato", type: "vegetable", price: 55 },
        { name: "Cucumber", imageKey: "cucumber", type: "vegetable", price: 50 },
        { name: "Bell Pepper", imageKey: "bellpepper", type: "vegetable", price: 85 },
        { name: "Spinach", imageKey: "spinach", type: "vegetable", price: 45 },
        { name: "Potato", imageKey: "potato", type: "vegetable", price: 40 },
        { name: "Onion", imageKey: "onion", type: "vegetable", price: 55 },
        { name: "Almonds", imageKey: "almonds", type: "dryfruit", price: 300 },
        { name: "Cashews", imageKey: "cashews", type: "dryfruit", price: 350 },
        { name: "Raisins", imageKey: "raisins", type: "dryfruit", price: 200 },
        { name: "Walnuts", imageKey: "walnuts", type: "dryfruit", price: 400 },
        { name: "Pistachios", imageKey: "pistachios", type: "dryfruit", price: 380 },
        { name: "Dates", imageKey: "dates", type: "dryfruit", price: 220 },
        { name: "Figs", imageKey: "figs", type: "dryfruit", price: 260 },
        { name: "Milk", imageKey: "milk", type: "dairy", price: 90 },
        { name: "Cheese", imageKey: "cheese", type: "dairy", price: 250 },
        { name: "Yogurt", imageKey: "yogurt", type: "dairy", price: 110 },
        { name: "Butter", imageKey: "butter", type: "dairy", price: 180 },
        { name: "Paneer", imageKey: "paneer", type: "dairy", price: 220 },
      ]);
      setLoading(false);
    }, 700);
  }, []);

  const fruits = produce.filter((p) => p.type === "fruit");
  const vegetables = produce.filter((p) => p.type === "vegetable");
  const dryfruits = produce.filter((p) => p.type === "dryfruit");
  const dairy = produce.filter((p) => p.type === "dairy");

  return (
    <div className="scroll-smooth">
      

      {/* Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="relative min-w-full h-full flex-shrink-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="w-2/5 pl-8 pr-4 text-white">
                  <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                  <p className="text-lg opacity-90">{slide.description}</p>
                  <a
                    href="#Trend"
                    className="mt-6 inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSlideChange(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Welcome Message with Full Name */}
      <div className="w-full bg-gray-100 m-[15px] py-4">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome back, {userFullName || 'User'}! 👋
          </h2>
        </div>
      </div>

      {/* Trending Products */}
      <div className="w-full min-h-screen flex items-center justify-center py-8">
        <div className="w-[98%] bg-gray-200 rounded p-6 overflow-auto">
          <h2 id="Trend" className="text-black text-3xl font-bold text-center mb-6">
            Currently Trending
          </h2>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-black text-xl">Loading products…</div>
            </div>
          ) : (
            <div className="space-y-8">
              <div id="fruits-section">
                <ProduceGrid items={fruits} type="fruit" limit={5} showViewMore />
              </div>
              <div id="vegetables-section">
                <ProduceGrid items={vegetables} type="vegetable" limit={5} showViewMore />
              </div>
              <div id="dryfruits-section">
                <ProduceGrid items={dryfruits} type="dryfruit" limit={5} showViewMore />
              </div>
              <div id="dairy-section">
                <ProduceGrid items={dairy} type="dairy" limit={5} showViewMore />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;