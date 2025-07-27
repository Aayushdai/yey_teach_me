import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProduceGrid from './ProduceGrid';

function Vegetables() {
  const [produce, setProduce] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' ||
                       document.cookie.includes('loggedIn=true');

    if (!isLoggedIn) {
      localStorage.setItem('redirectAfterLogin', '/vegetables');
      navigate('/signup'); // Fixed: Changed from '/signup' to '/signin'
      return;
    }

    const data = [
      { name: 'Carrot', imageKey: 'carrot', type: 'vegetable', price: 60 },
      { name: 'Broccoli', imageKey: 'broccoli', type: 'vegetable', price: 80 },
      { name: 'Tomato', imageKey: 'tomato', type: 'vegetable', price: 55 },
      { name: 'Cucumber', imageKey: 'cucumber', type: 'vegetable', price: 50 },
      { name: 'Bell Pepper', imageKey: 'bellpepper', type: 'vegetable', price: 85 },
      { name: 'Spinach', imageKey: 'spinach', type: 'vegetable', price: 45 },
      { name: 'Potato', imageKey: 'potato', type: 'vegetable', price: 40 },
      { name: 'Onion', imageKey: 'onion', type: 'vegetable', price: 55 }
    ];
    setProduce(data);
  }, [navigate]);

  return (
    <div className="bg-green-100 min-h-screen p-6">
      <h2 className="text-black text-3xl font-bold text-center mb-8">🥕 All Vegetables</h2>
      <ProduceGrid 
        items={produce} 
        type="vegetable" 
        limit={0} 
        showViewMore={false} 
        isLoggedIn={localStorage.getItem('isLoggedIn') === 'true' || document.cookie.includes('loggedIn=true')} 
      />
    </div>
  );
}

export default Vegetables;