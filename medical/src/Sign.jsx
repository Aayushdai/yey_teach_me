import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sign() {
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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        // Store authentication data
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userFullName', result.fullName);
        localStorage.setItem('userEmail', email);
        
        // Set cookies with SameSite and Secure flags for better security
        const cookieOptions = `path=/; max-age=${60 * 60 * 24}; SameSite=Lax${window.location.protocol === 'https:' ? '; Secure' : ''}`;
        document.cookie = `loggedIn=true; ${cookieOptions}`;
        document.cookie = `userEmail=${encodeURIComponent(email)}; ${cookieOptions}`;
        document.cookie = `userFullName=${encodeURIComponent(result.fullName)}; ${cookieOptions}`;

        // Update UI and redirect
        window.dispatchEvent(new Event('storage'));
        
        const redirectUrl = localStorage.getItem('redirectAfterLogin') || '/lhome';
        localStorage.removeItem('redirectAfterLogin');
        navigate(redirectUrl);
      } else {
        setErrorMsg(result.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMsg(error.message || 'Network error. Please try again later.');
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
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
                autoComplete="username"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
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
              {isLoading ? (
                <>
                  <span className="inline-block animate-spin mr-2">↻</span>
                  Signing In...
                </>
              ) : 'Sign In'}
            </button>
            
            <div className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a 
                href="/signup" 
                className="text-blue-600 hover:underline font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/New_account');
                }}
              >
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