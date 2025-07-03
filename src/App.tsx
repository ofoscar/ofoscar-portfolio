import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className='app-container'>
        {/* Navigation Bar */}
        <nav className='nav-container'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              {/* Logo and brand */}
              <div className='flex items-center space-x-3'>
                <h1 className='text-xl brand-text'>ofoscar</h1>
              </div>

              {/* Desktop Navigation */}
              <div className='hidden md:flex items-center space-x-8'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
                <Link to='/projects' className='nav-link'>
                  Projects
                </Link>
                <Link to='/contact' className='nav-link'>
                  Contact
                </Link>
                <button className='btn-primary'>Get Started</button>
              </div>

              {/* Mobile menu button */}
              <div className='md:hidden'>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    ) : (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className='md:hidden border-t border-gray-200 dark:border-gray-700'>
              <div className='px-4 py-2 space-y-2'>
                <Link
                  to='/'
                  className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to='/about'
                  className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to='/projects'
                  className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  to='/contact'
                  className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <button className='w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors mt-2'>
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
