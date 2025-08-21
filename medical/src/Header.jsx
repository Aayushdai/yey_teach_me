import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const navigate = useNavigate();
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true' || 
                      document.cookie.includes('loggedIn=true');
      setIsLoggedIn(loggedIn);
    };

    checkAuthStatus();
    window.addEventListener('storage', checkAuthStatus);
    return () => window.removeEventListener('storage', checkAuthStatus);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localSearchTerm.trim()) {
      if (isLoggedIn) {
        navigate(`/search?q=${encodeURIComponent(localSearchTerm.trim())}`);
      } else {
        navigate('/signup', { 
          state: { 
            from: `/search?q=${encodeURIComponent(localSearchTerm.trim())}`,
            message: 'Please login to use search' 
          }
        });
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
    navigate('/');
    window.dispatchEvent(new Event('storage'));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate('/lhome');
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img src="bazar.png" alt="Bazar Logo" className="h-15 w-18" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a 
              href={isLoggedIn ? '/lhome' : '/'} 
              onClick={handleHomeClick}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/fruits">Fruits</NavDropdown.Item>
              <NavDropdown.Item href="/vegetables">Vegetables</NavDropdown.Item>
              <NavDropdown.Item href="/dryfruits">Dry Fruits</NavDropdown.Item>
              <NavDropdown.Item href="/dairys">Dairy</NavDropdown.Item>
            </NavDropdown>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)}
                placeholder="Search fruits and vegetables..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Auth Button */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Log Out
              </button>
            ) : (
              <a 
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign In
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;