import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Esewa = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPurpose, setSelectedPurpose] = useState('Groceries');
  const [remarks, setRemarks] = useState('Product purchase');
  const [paymentData, setPaymentData] = useState(null);

  const purposeOptions = [
    { id: 1, label: 'Bill sharing', icon: 'fas fa-receipt' },
    { id: 2, label: 'Groceries', icon: 'fas fa-utensils' },
    { id: 3, label: 'Lend/borrow', icon: 'fas fa-exchange-alt' },
    { id: 4, label: 'Personal Use', icon: 'fas fa-user' },
    { id: 5, label: 'Ride Sharing', icon: 'fas fa-car' },
    { id: 6, label: 'Family Expense', icon: 'fas fa-gift' }
  ];

  const userData = {
    name: 'TarkriBazer',
    email: '+977 987654321',
    initials: 'T'
  };

  useEffect(() => {
    const data = location.state;
    if (!data) {
      navigate('/paymentgateway');
      return;
    }
    setPaymentData(data);

    if (data.productName) {
      setRemarks(`Purchase of ${data.productName} x${data.quantity}`);
      setSelectedPurpose('Groceries');
    }
  }, [location.state, navigate]);

  const handlePurposeSelect = (purpose) => setSelectedPurpose(purpose);

  // ✅ Simplified submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentData) {
      alert('Missing payment information');
      return;
    }
    alert(`Payment of NPR ${paymentData.total} successful via eSewa!`);
    navigate('/lhome'); // Redirect to home
  };

  if (!paymentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading payment details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl flex max-w-4xl w-full overflow-hidden">
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 flex-1 hidden md:flex flex-col justify-center">
          <div className="text-2xl font-bold mb-8 flex items-center">
            <img
              src="https://play-lh.googleusercontent.com/MRzMmiJAe0-xaEkDKB0MKwv1a3kjDieSfNuaIlRo750_EgqxjRFWKKF7xQyRSb4O95Y"
              alt="eSewa"
              className="w-8 h-8 mr-2"
            />
            eSewa Payment
          </div>
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Send Money Securely</h1>
            <p className="text-green-100">Fast, secure and convenient money transfers</p>
          </div>

          <div className="bg-green-500 bg-opacity-25 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Product:</span>
                <span>{paymentData.productName}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity:</span>
                <span>{paymentData.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Unit Price:</span>
                <span>NPR {paymentData.price}</span>
              </div>
              <div className="border-t border-green-300 pt-1 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>NPR {paymentData.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-8 flex-1">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Send Money</h2>
            <div className="text-3xl font-bold text-green-600 my-2">
              NPR {paymentData.total.toLocaleString()}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Send fund to</label>
              <div className="bg-gray-50 p-4 rounded-xl flex items-center">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {userData.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{userData.name}</h3>
                  <p className="text-gray-400 text-xs">{userData.email}</p>
                </div>
              </div>
            </div>

            {/* Purpose */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Purpose</label>
              <div className="grid grid-cols-3 gap-3">
                {purposeOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`border-2 rounded-xl p-3 text-center cursor-pointer transition-all ${
                      selectedPurpose === option.label
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => handlePurposeSelect(option.label)}
                  >
                    <i className={`${option.icon} text-green-600 text-lg mb-1`}></i>
                    <div className="text-xs mt-1">{option.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Remarks */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">Remarks</label>
              <textarea
                className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-green-500 focus:outline-none"
                rows="3"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              ></textarea>
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-6 rounded-xl w-full transition-all hover:shadow-lg hover:from-green-700 hover:to-green-800"
            >
              PAY NPR {paymentData.total.toLocaleString()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Esewa;
