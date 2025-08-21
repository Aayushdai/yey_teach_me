import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* ───────────────── ProduceGrid reusable component ───────────────── */
function ProduceGrid({ items, type, limit, showViewMore }) {
  const displayedItems = limit ? items.slice(0, limit) : items;

  return (
    <div>
      {/* Section heading */}
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {displayedItems.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden border-4 border-gray-500 transform hover:scale-105 transition-all duration-300"
          >
            {/* Type badge */}
            <div className="absolute top-2 left-2 bg-yellow-300 text-yellow-900 px-2 py-1 rounded text-xs font-semibold z-10 shadow">
              {item.type === "fruit"
                ? "Fruit"
                : item.type === "vegetable"
                ? "Vegetable"
                : item.type === "dryfruit"
                ? "Dry Fruit"
                : item.type === "dairy"
                ? "Dairy"
                : ""}
            </div>

            {/* Image */}
            <Link to={`/signup`}>
              <div className="h-52 w-full overflow-hidden bg-pink-100 cursor-pointer">
                <img
                  src={`/src/assets/${item.imageKey}.jpg`}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>

            {/* Name + price */}
            <div className="p-4">
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {item.name}
              </h4>
              <div className="pt-2 text-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">
                  NPR {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "View more" link */}
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

/* ─────────────────────── StarRating Component ─────────────────────── */
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400">
          {i < fullStars ? "★" : hasHalfStar && i === fullStars ? "★" : "☆"}
        </span>
      ))}
      <span className="ml-1 text-sm font-semibold">{rating}</span>
    </div>
  );
}

/* ─────────────────────── ReviewsSection Component ─────────────────────── */
function ReviewsSection() {
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Sample review data
  const reviews = [
    { name: "Ramesh S.", rating: 5, date: "2 weeks ago", comment: "Fresh produce and excellent service. Will order again!" },
    { name: "Sita M.", rating: 5, date: "3 weeks ago", comment: "The fruits were so fresh and delicious. Great prices too." },
    { name: "Hari P.", rating: 4, date: "1 month ago", comment: "Good quality vegetables, delivery was prompt." },
    { name: "Gita K.", rating: 5, date: "2 months ago", comment: "Love supporting local farmers through this platform!" },
    { name: "Bimala T.", rating: 3, date: "2 months ago", comment: "Some items were not available, but what I got was good quality." },
    { name: "Krishna D.", rating: 5, date: "3 months ago", comment: "Best place to get organic produce in Nepal!" },
    { name: "Anita R.", rating: 4, date: "3 months ago", comment: "Convenient and reliable. Will recommend to friends." },
    { name: "Prakash L.", rating: 5, date: "4 months ago", comment: "Farm-fresh products at reasonable prices. Excellent initiative!" }
  ];

  // Calculate rating distribution
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach(review => ratingCounts[review.rating]++);
  
  const totalRatings = reviews.length;

  // Display only 3 reviews initially, or all if showAllReviews is true
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
        
        {/* Rating Summary */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Overall Rating */}
          <div className="md:w-1/3">
            <div className="text-5xl font-bold text-gray-900">4.7</div>
            <StarRating rating={4.7} />
            <div className="text-sm text-gray-600 mt-1">Based on {totalRatings} reviews</div>
          </div>
          
          {/* Rating Distribution */}
          <div className="md:w-2/3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center mb-2">
                <div className="w-10 text-sm text-gray-600">{rating} star</div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                  <div 
                    className="h-full bg-green-600 rounded-full" 
                    style={{ width: `${(ratingCounts[rating] / totalRatings) * 100}%` }}
                  ></div>
                </div>
                <div className="w-10 text-sm text-gray-600">{ratingCounts[rating]}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Reviews List */}
        <div className="space-y-6 mb-8">
          {displayedReviews.map((review, index) => (
            <div key={index} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-600 mr-3">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="flex items-center">
                    <StarRating rating={review.rating} />
                    <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
        
        {/* Show More/Less Button */}
        {reviews.length > 3 && (
          <button
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition-colors"
          >
            {showAllReviews ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── Home page component ───────────────────────── */
function Home() {
  const [produce, setProduce] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /* Carousel slides */
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

  /* ─── Auto-advance every 6 s ─── */
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

  /* Manual nav */
  const handleSlideChange = (idx) => {
    if (idx !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(idx);
        setIsTransitioning(false);
      }, 50);
    }
  };
  
  const goToPrevSlide = () =>
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  const goToNextSlide = () =>
    handleSlideChange((currentSlide + 1) % slides.length);

  /* ─── Load products (0.7s delay) ─── */
  useEffect(() => {
    setTimeout(() => {
      setProduce([
        /* Fruits */
        { name: "Apple", imageKey: "apple", type: "fruit", price: 120 },
        { name: "Banana", imageKey: "banana", type: "fruit", price: 90 },
        { name: "Orange", imageKey: "orange", type: "fruit", price: 100 },
        { name: "Strawberry", imageKey: "strawberry", type: "fruit", price: 150 },
        { name: "Mango", imageKey: "mango", type: "fruit", price: 130 },
        { name: "Pineapple", imageKey: "pineapple", type: "fruit", price: 160 },
        { name: "Grapes", imageKey: "grapes", type: "fruit", price: 110 },
        { name: "Watermelon", imageKey: "watermelon", type: "fruit", price: 140 },
        /* Vegetables */
        { name: "Carrot", imageKey: "carrot", type: "vegetable", price: 60 },
        { name: "Broccoli", imageKey: "broccoli", type: "vegetable", price: 80 },
        { name: "Tomato", imageKey: "tomato", type: "vegetable", price: 55 },
        { name: "Cucumber", imageKey: "cucumber", type: "vegetable", price: 50 },
        { name: "Bell Pepper", imageKey: "bellpepper", type: "vegetable", price: 85 },
        { name: "Spinach", imageKey: "spinach", type: "vegetable", price: 45 },
        { name: "Potato", imageKey: "potato", type: "vegetable", price: 40 },
        { name: "Onion", imageKey: "onion", type: "vegetable", price: 55 },
        /* Dry fruits */
        { name: "Almonds", imageKey: "almonds", type: "dryfruit", price: 300 },
        { name: "Cashews", imageKey: "cashews", type: "dryfruit", price: 350 },
        { name: "Raisins", imageKey: "raisins", type: "dryfruit", price: 200 },
        { name: "Walnuts", imageKey: "walnuts", type: "dryfruit", price: 400 },
        { name: "Pistachios", imageKey: "pistachios", type: "dryfruit", price: 380 },
        { name: "Dates", imageKey: "dates", type: "dryfruit", price: 220 },
        { name: "Figs", imageKey: "figs", type: "dryfruit", price: 260 },
        /* Dairy */
        { name: "Milk", imageKey: "milk", type: "dairy", price: 90 },
        { name: "Cheese", imageKey: "cheese", type: "dairy", price: 250 },
        { name: "Yogurt", imageKey: "yogurt", type: "dairy", price: 110 },
        { name: "Butter", imageKey: "butter", type: "dairy", price: 180 },
        { name: "Paneer", imageKey: "paneer", type: "dairy", price: 220 },
      ]);
      setLoading(false);
    }, 700);
  }, []);

  /* Filter products by type */
  const fruits = produce.filter((p) => p.type === "fruit");
  const vegetables = produce.filter((p) => p.type === "vegetable");
  const dryfruits = produce.filter((p) => p.type === "dryfruit");
  const dairy = produce.filter((p) => p.type === "dairy");

  return (
    <div className="scroll-smooth">
      {/* ────── Carousel ────── */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-[500px] overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="relative min-w-full h-full flex-shrink-0"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="w-2/5 pl-8 pr-4 text-white">
                    <h3 className="text-4xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      {slide.description}
                    </p>
                    <a
                      href="#Trend"
                      className="mt-6 inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition no-underline hover:text-green-200"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
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

          {/* Arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* ────── Sidebar / Content Layout ────── */}
        <div className="w-full h-screen flex items-center justify-center">
          {/* Left Sidebar */}
          <div className="hidden md:flex h-screen flex-0.5 items-center justify-center">
            <div className="h-[90%] w-[90%] bg-gray-200 p-[50px] border rounded flex flex-col space-y-4">
              <span className="text-lg font-semibold">Categories</span>
              <a href="#fruits-section" className="text-black underline hover:text-green-300 transition">
                Fruits
              </a>
              <a href="#vegetables-section" className="text-black underline hover:text-green-300 transition">
                Vegetables
              </a>
              <a href="#dryfruits-section" className="text-black underline hover:text-green-300 transition">
                Dry Fruits
              </a>
              <a href="#dairy-section" className="text-black underline hover:text-green-300 transition">
                Dairy
              </a>
            </div>
          </div>

          {/* Center Section: Welcome Intro */}
          {/* Center Section: Welcome Intro */}
<div className="h-screen flex-2 flex items-center justify-center p-6">
  <div className="h-[95%] w-[90%] bg-white border rounded-xl shadow-lg flex flex-col">
    <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-green-600">E-Gov Farmers Market</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
        A trusted government platform connecting Nepali farmers directly with consumers. 
        Ensure fair prices, fresh produce, and transparent trade — all in one digital marketplace.
      </p>

      {/* Icon Highlights - Improved with SVGs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-center">
        {/* Support Farmers Card */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm transition hover:shadow-md">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              <path d="M12 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
            </svg>
          </div>
          <h4 className="font-semibold text-gray-800 text-lg">Support Farmers</h4>
          <p className="text-sm text-gray-600 mt-2">Cut out middlemen and empower local agriculture</p>
        </div>

        {/* Fresh & Fast Card */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm transition hover:shadow-md">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M19 12h-2v-3.5H9V12H7c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM12 18h-2v-2h2v2zm0-4h-2V8h2v6z"/>
            </svg>
          </div>
          <h4 className="font-semibold text-gray-800 text-lg">Fresh & Fast</h4>
          <p className="text-sm text-gray-600 mt-2">Farm-to-table delivery in 24–48 hours</p>
        </div>

        {/* Secure & Verified Card */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-sm transition hover:shadow-md">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-yellow-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 10c-2.33 0-4.2-1.87-4.2-4.2 0-.68.17-1.32.46-1.89l2.4-4.8c.4-.8 1.16-1.3 2.04-1.3s1.64.5 2.04 1.3l2.4 4.8c.29.57.46 1.21.46 1.89 0 2.33-1.87 4.2-4.2 4.2z"/>
            </svg>
          </div>
          <h4 className="font-semibold text-gray-800 text-lg">Secure & Verified</h4>
          <p className="text-sm text-gray-600 mt-2">Government-backed transparency and safety</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
        <Link
          to="/signup"
          className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-gray-900 transition text-center"
        >
          Shop Now
        </Link>
      </div>
    </div>
  </div>
</div>

          {/* Right Placeholder */}
          <div className="hidden md:flex h-screen flex-1 items-center justify-center">
            <div className="h-[90%] w-[90%] bg-gray-200 border rounded p-[50px]">
              Space for Ads
            </div>
          </div>
        </div>

        {/* ────── Trending Products Section ────── */}
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

        {/* ────── Reviews Section ────── */}
        <ReviewsSection />
      </div>
    </div>
  );
}

export default Home;