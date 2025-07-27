import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [produce, setProduce] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Check authentication first
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/signup', { 
        state: { 
          from: '/search' + window.location.search,
          message: 'Please login to use search' 
        }
      });
      return;
    }

    // Only proceed with search if logged in
    const query = searchParams.get('q');
    if (query) {
      setSearchTerm(query);
    }
  }, [searchParams, navigate]);

  useEffect(() => {
    setProduce([
      // Fruits
      { name: "Apple", imageKey: "apple", type: "fruit", price: 120 },
      { name: "Banana", imageKey: "banana", type: "fruit", price: 90 },
      { name: "Orange", imageKey: "orange", type: "fruit", price: 100 },
      { name: "Strawberry", imageKey: "strawberry", type: "fruit", price: 150 },
      { name: "Mango", imageKey: "mango", type: "fruit", price: 130 },
      // Vegetables
      { name: "Carrot", imageKey: "carrot", type: "vegetable", price: 60 },
      { name: "Broccoli", imageKey: "broccoli", type: "vegetable", price: 80 },
      { name: "Tomato", imageKey: "tomato", type: "vegetable", price: 55 },
      { name: "Cucumber", imageKey: "cucumber", type: "vegetable", price: 50 },
      // Dry Fruits
      { name: "Almonds", imageKey: "almonds", type: "dryfruit", price: 300 },
      { name: "Cashews", imageKey: "cashews", type: "dryfruit", price: 350 },
      { name: "Raisins", imageKey: "raisins", type: "dryfruit", price: 200 },
      // Dairy
      { name: "Milk", imageKey: "milk", type: "dairy", price: 90 },
      { name: "Cheese", imageKey: "cheese", type: "dairy", price: 250 },
      { name: "Yogurt", imageKey: "yogurt", type: "dairy", price: 110 },
    ]);
    setLoading(false);
  }, []);

  const filteredProduce = produce.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fruits = filteredProduce.filter(item => item.type === 'fruit');
  const vegetables = filteredProduce.filter(item => item.type === 'vegetable');
  const dairy = filteredProduce.filter(item => item.type === 'dairy');
  const dryfruit = filteredProduce.filter(item => item.type === 'dryfruit');

  const clearSearch = () => {
    navigate('/lhome');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full bg-gray-100 py-4 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Search Results for "{searchTerm}"
              </h2>
              <p className="text-gray-600 mt-1">
                Found {filteredProduce.length} items ({fruits.length} fruits, {vegetables.length} vegetables, {dairy.length} dairy, {dryfruit.length} dryfruits)
              </p>
            </div>
            <button
              onClick={clearSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen flex items-center justify-center py-8">
        <div className="w-[98%] bg-gray-200 rounded p-6 overflow-auto">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-black text-xl">Loading...</div>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredProduce.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold mb-2">No results found for "{searchTerm}"</h3>
                  <p className="text-lg mb-4">Try searching for something else</p>
                </div>
              ) : (
                <>
                  {fruits.length > 0 && <ProductGridSection items={fruits} title="🍓 Fruits" />}
                  {vegetables.length > 0 && <ProductGridSection items={vegetables} title="🥕 Vegetables" />}
                  {dryfruit.length > 0 && <ProductGridSection items={dryfruit} title="🌰 Dry Fruits" />}
                  {dairy.length > 0 && <ProductGridSection items={dairy} title="🥛 Dairy" />}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProductGridSection({ items, title }) {
  return (
    <div>
      <h3 className="text-black text-2xl font-semibold mb-4 flex items-center">
        {title}
        <span className="ml-2 text-sm bg-green-500 px-2 py-1 rounded-full">
          {items.length} items
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <Link to={`/product/${encodeURIComponent(item.name)}`}>
              <div className="h-52 w-full overflow-hidden bg-pink-100 flex items-center justify-center cursor-pointer">
                <img
                  src={`/src/assets/${item.imageKey}.jpg`}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/300x200?text=${item.name}`;
                  }}
                />
              </div>
            </Link>
            <div className="p-4">
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">{item.name}</h4>
              <div className="pt-2 text-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">
                  NPR {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;