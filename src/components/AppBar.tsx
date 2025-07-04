import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AppBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='nav-container'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo and brand */}
          <div className='flex items-center space-x-1 cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              style={{ color: '#BF1A2F' }}
            >
              <path
                fill='currentColor'
                d='M14.66 14.18c.03.11.04.22.04.32c.03.65-.26 1.35-.73 1.78c-.22.19-.58.39-.86.47c-.88.31-1.76-.13-2.28-.64c.94-.22 1.49-.9 1.67-1.61c.12-.61-.13-1.12-.23-1.72c-.1-.58-.08-1.07.13-1.6c.15.29.31.59.5.82c.6.78 1.55 1.12 1.76 2.18M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-4.84.56l-.1-.2c-.16-.36-.61-.98-.61-.98c-.18-.23-.4-.44-.6-.64c-.53-.47-1.12-.8-1.63-1.29c-1.17-1.14-1.43-3.01-.68-4.45c-.75.18-1.4.58-1.96 1.03c-2.03 1.62-2.83 4.47-1.87 6.92c.03.08.06.16.06.26c0 .17-.12.32-.27.39c-.19.07-.37.03-.5-.1a.3.3 0 0 1-.13-.13c-.87-1.11-1.03-2.71-.44-3.98c-1.31 1.06-2.02 2.85-1.93 4.53c.06.39.1.78.24 1.17c.11.47.32.91.56 1.35c.84 1.34 2.31 2.31 3.89 2.5c1.68.21 3.48-.09 4.77-1.24c1.44-1.3 1.94-3.37 1.2-5.14'
              />
            </svg>
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
            <Link to='/blog' className='nav-link'>
              Blog
            </Link>
            <button
              className='contact-btn'
              onClick={() => navigate('/contact')}
            >
              <div className='px-2'>Contact</div>
              <div
                className='rounded-full h-8 w-8 flex items-center justify-center'
                style={{ backgroundColor: '#BF1A2F' }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill='currentColor'
                    fill-rule='evenodd'
                    d='M5.5 4H12v6.5h-1V5.707l-6.146 6.147l-.708-.708L10.293 5H5.5z'
                    clip-rule='evenodd'
                  />
                </svg>
              </div>
            </button>
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
            <button
              className='w-full px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 hover:scale-105 mt-2'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                backgroundImage:
                  'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid transparent',
                backgroundClip: 'padding-box',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                boxShadow:
                  'inset 0 -2px 4px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.4)',
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default AppBar;
