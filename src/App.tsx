import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      {/* App Bar */}
      <nav className='bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo and brand */}
            <div className='flex items-center space-x-3'>
              <div className='flex items-center space-x-2'>
                <img src={viteLogo} className='h-8 w-8' alt='Vite logo' />
                <img
                  src={reactLogo}
                  className='h-8 w-8 animate-spin-slow'
                  alt='React logo'
                />
              </div>
              <h1 className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                ofoscar
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              <a
                href='#'
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              >
                Home
              </a>
              <a
                href='#'
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              >
                About
              </a>
              <a
                href='#'
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              >
                Projects
              </a>
              <a
                href='#'
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              >
                Contact
              </a>
              <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors'>
                Get Started
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
              <a
                href='#'
                className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
              >
                Home
              </a>
              <a
                href='#'
                className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
              >
                About
              </a>
              <a
                href='#'
                className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
              >
                Projects
              </a>
              <a
                href='#'
                className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
              >
                Contact
              </a>
              <button className='w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors mt-2'>
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className='flex items-center justify-center min-h-[calc(100vh-4rem)]'>
        <div className='text-center max-w-2xl mx-auto px-4'>
          <div className='flex justify-center space-x-8 mb-8'>
            <a
              href='https://vite.dev'
              target='_blank'
              className='transition-transform hover:scale-110'
            >
              <img src={viteLogo} className='h-24 w-24' alt='Vite logo' />
            </a>
            <a
              href='https://react.dev'
              target='_blank'
              className='transition-transform hover:scale-110'
            >
              <img
                src={reactLogo}
                className='h-24 w-24 animate-spin-slow'
                alt='React logo'
              />
            </a>
          </div>

          <h2 className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8'>
            Vite + React
          </h2>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8'>
            <button
              onClick={() => setCount((count) => count + 1)}
              className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-lg'
            >
              count is {count}
            </button>
            <p className='mt-4 text-gray-600 dark:text-gray-300'>
              Edit{' '}
              <code className='bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm'>
                src/App.tsx
              </code>{' '}
              and save to test HMR
            </p>
          </div>

          <p className='text-gray-500 dark:text-gray-400'>
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
