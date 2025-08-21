import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Paymentgateway = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [loading, setLoading] = useState(true);

  // Get product data from navigation state
  const productData = location.state || {};

  useEffect(() => {
    // Simulate loading delay for UI feedback
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  const handlePayment = () => {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }

    // Pass product data and user info to payment methods
    const paymentData = {
      ...productData,
      paymentMethod: selectedMethod
    };

    // Redirect based on selected method
    if (selectedMethod === 'esewa') {
      navigate('/esewa', { state: paymentData });
    } else if (selectedMethod === 'khalti') {
      navigate('/khalti', { state: paymentData });
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
          <p className="text-lg text-gray-700 font-medium">Loading payment options...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">Secure Payment</h2>
          <p className="text-blue-100 text-sm">Choose your preferred payment method</p>
          {/* Display order summary */}
          {/* {productData.productName && (
            <div className="mt-4 p-3 bg-white bg-opacity-20 rounded-lg">
              <p className="text-white text-sm">
                {productData.productName} × {productData.quantity}
              </p>
              <p className="text-white font-bold">NPR {productData.total}</p>
            </div>
          )} */}
        </div>

        <div className="p-6 ">
          {/* Payment Options */}
          <div className="space-y-4 mb-8 ml-15">
            {/* eSewa */}
            <label
              className={`group flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                selectedMethod === 'esewa'
                  ? 'border-green-500 bg-green-50 shadow-lg scale-[1.02]'
                  : 'border-gray-200 hover:border-green-300 hover:shadow-md'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="esewa"
                checked={selectedMethod === 'esewa'}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center flex-1">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl mr-4 shadow-lg">
                  <img
                    src="https://play-lh.googleusercontent.com/MRzMmiJAe0-xaEkDKB0MKwv1a3kjDieSfNuaIlRo750_EgqxjRFWKKF7xQyRSb4O95Y"
                    alt="eSewa"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">eSewa</p>
                  <p className="text-sm text-gray-500">Digital wallet payment</p>
                  <p className="text-xs text-green-600 font-medium">✓ Instant & Secure</p>
                </div>
              </div>
              {selectedMethod === 'esewa' && (
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center ml-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </label>

            {/* Khalti */}
            <label
              className={`group flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                selectedMethod === 'khalti'
                  ? 'border-purple-500 bg-purple-50 shadow-lg scale-[1.02]'
                  : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="khalti"
                checked={selectedMethod === 'khalti'}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center flex-1">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mr-4 shadow-lg">
                  <img
                    src="https://seeklogo.com/images/K/khalti-logo-F0B049E67E-seeklogo.com.png"
                    alt="Khalti"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">Khalti</p>
                  <p className="text-sm text-gray-500">Digital wallet payment</p>
                  <p className="text-xs text-purple-600 font-medium">✓ Quick & Reliable</p>
                </div>
              </div>
              {selectedMethod === 'khalti' && (
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center ml-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </label>
          </div>

          {/* Proceed Button */}
          <button
            onClick={handlePayment}
            disabled={!selectedMethod}
            className={`w-full py-4 font-bold rounded-xl transition-all duration-200 ${
              selectedMethod
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {selectedMethod ? 'Proceed to Payment' : 'Select Payment Method'}
          </button>

          {/* Security Info */}
          <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center items-center text-gray-500">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <p className="text-sm">256-bit SSL encrypted & PCI compliant</p>
          </div>

          {/* Payment Methods Info */}
          <div className="mt-4 text-center">
            <div className="flex justify-center space-x-3 opacity-70">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Bank Transfer</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Mobile Banking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentgateway;