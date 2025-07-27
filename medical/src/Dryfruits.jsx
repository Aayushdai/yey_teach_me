import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProduceGrid from './ProduceGrid';

function DryFruits() {
  const [produce, setProduce] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' ||
                       document.cookie.includes('loggedIn=true');

    if (!isLoggedIn) {
      localStorage.setItem('redirectAfterLogin', '/dryfruits');
      navigate('/signup');
      return;
    }

    const data = [
      { name: 'Almonds', imageKey: 'almonds', type: 'dryfruit', price: 300 },
      { name: 'Cashews', imageKey: 'cashews', type: 'dryfruit', price: 350 },
      { name: 'Raisins', imageKey: 'raisins', type: 'dryfruit', price: 200 },
      { name: 'Walnuts', imageKey: 'walnuts', type: 'dryfruit', price: 400 },
      { name: 'Pistachios', imageKey: 'pistachios', type: 'dryfruit', price: 380 },
      { name: 'Dates', imageKey: 'dates', type: 'dryfruit', price: 220 },
      { name: 'Figs', imageKey: 'figs', type: 'dryfruit', price: 260 }
    ];
    setProduce(data);
  }, [navigate]);

  return (
    <div className="bg-red-50 min-h-screen p-6">
      <h2 className="text-black text-3xl font-bold text-center mb-8">🌰 All Dry Fruits</h2>
      <ProduceGrid 
        items={produce} 
        type="dryfruit" 
        limit={0} 
        showViewMore={false} 
        isLoggedIn={localStorage.getItem('isLoggedIn') === 'true' || document.cookie.includes('loggedIn=true')}
      />
    </div>
  );
}

export default DryFruits;
