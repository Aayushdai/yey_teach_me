import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sign() {  // Changed from SignIn to Sign to match export name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!email.trim() || !password.trim()) {
      setErrorMsg('Email and password are required');
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('action', 'login');

      const response = await fetch('http://localhost/ok/medical/src/php/backend.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.text();

      if (result.toLowerCase().includes('success')) {
        // Set authentication tokens
        localStorage.setItem('isLoggedIn', 'true');
        document.cookie = `loggedIn=true; path=/; max-age=${60 * 60 * 24}`; // 1 day
        document.cookie = `userEmail=${encodeURIComponent(email)}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days

        // Force immediate UI update across all components
        window.dispatchEvent(new Event('storage'));

        // Check if there's a redirect URL stored
        const redirectUrl = localStorage.getItem('redirectAfterLogin');
        if (redirectUrl) {
          localStorage.removeItem('redirectAfterLogin');
          navigate(redirectUrl);
        } else {
          // Default redirect to logged-in home page
          navigate('/lhome');
        }
      } else {
        setErrorMsg(result || 'Login failed. Please try again.');
      }
    } catch (error) {
      setErrorMsg('Network error. Please try again later.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-200 flex items-center justify-center">
      <div className="h-[600px] w-[700px] bg-gray-50 shadow-lg rounded-lg">
        <div className="flex flex-col items-center justify-center h-full p-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Sign In</h2>
          
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            
            {errorMsg && (
              <p className="text-red-500 text-sm mb-4">
                {errorMsg}
              </p>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
            
            <div className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-600 hover:underline font-medium">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;