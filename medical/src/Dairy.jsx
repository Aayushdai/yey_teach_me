import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProduceGrid from './ProduceGrid';

function Dairy() {
  const [dairyItems, setDairyItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' ||
                       document.cookie.includes('loggedIn=true');

    if (!isLoggedIn) {
      localStorage.setItem('redirectAfterLogin', '/dairy');
      navigate('/signup');
      return;
    }

    const data = [
      { name: 'Milk', imageKey: 'milk', type: 'dairy', price: 90 },
      { name: 'Cheese', imageKey: 'cheese', type: 'dairy', price: 250 },
      { name: 'Yogurt', imageKey: 'yogurt', type: 'dairy', price: 110 },
      { name: 'Butter', imageKey: 'butter', type: 'dairy', price: 180 },
      { name: 'Paneer', imageKey: 'paneer', type: 'dairy', price: 220 },
    ];

    setTimeout(() => {
      setDairyItems(data);
      setLoading(false);
    }, 700);
  }, [navigate]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-black text-4xl font-bold mb-6 text-center">🥛 Dairy Products</h2>
      {loading ? (
        <div className="text-black text-xl text-center">Loading dairy products...</div>
      ) : (
        <ProduceGrid
          items={dairyItems}
          type="dairy"
          limit={0}
          showViewMore={false}
          isLoggedIn={localStorage.getItem('isLoggedIn') === 'true' || document.cookie.includes('loggedIn=true')}
        />
      )}
    </div>
  );
}

export default Dairy;
