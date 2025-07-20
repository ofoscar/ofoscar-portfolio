import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

function MobileNavigation({
  isMenuOpen,
  setIsMenuOpen,
}: MobileNavigationProps) {
  const { t } = useTranslation();

  if (!isMenuOpen) return null;

  return (
    <div className='md:hidden border-t border-gray-200 dark:border-gray-700'>
      <div className='px-4 py-2 space-y-2'>
        <Link
          to='/'
          className='block text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
          onClick={() => setIsMenuOpen(false)}
        >
          {t('nav.home')}
        </Link>
        <Link
          to='/about'
          className='block text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
          onClick={() => setIsMenuOpen(false)}
        >
          {t('nav.about')}
        </Link>
        <Link
          to='/projects'
          className='block text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
          onClick={() => setIsMenuOpen(false)}
        >
          {t('nav.projects')}
        </Link>
        <Link
          to='/contact'
          className='block text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
          onClick={() => setIsMenuOpen(false)}
        >
          {t('nav.contact')}
        </Link>
        <button
          className='w-full px-4 py-2 rounded-lg text-dark font-medium transition-all duration-200 hover:scale-105 mt-2'
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
  );
}

export default MobileNavigation;
