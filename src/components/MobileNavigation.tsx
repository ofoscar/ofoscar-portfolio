import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ContactButton from './ContactButton';

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
    <div className='md:hidden'>
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
        <a
          href='https://blog.ofoscar.com'
          target='_blank'
          rel='noopener noreferrer'
          className='block text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors'
          onClick={() => setIsMenuOpen(false)}
        >
          {t('nav.blog', 'Blog')}
        </a>
        <ContactButton
          variant='mobile'
          onMobileClick={() => setIsMenuOpen(false)}
        />
      </div>
    </div>
  );
}

export default MobileNavigation;
