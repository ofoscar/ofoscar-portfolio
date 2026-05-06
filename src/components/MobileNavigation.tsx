import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
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

  return (
    <div
      className={`md:hidden mobile-menu mobile-menu-container ${
        isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'
      }`}
    >
      <div className='px-4 py-2 space-y-2'>
        <NavLink
          to='/'
          end
          className={({ isActive }) => `block py-2 transition-colors ${isActive ? 'text-red-700 font-semibold' : 'text-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
          onClick={() => setIsMenuOpen(false)}
        >
          {t('nav.home')}
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => `block py-2 transition-colors ${isActive ? 'text-red-700 font-semibold' : 'text-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
          onClick={() => setIsMenuOpen(false)}
        >
          {t('nav.about')}
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) => `block py-2 transition-colors ${isActive ? 'text-red-700 font-semibold' : 'text-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
          onClick={() => setIsMenuOpen(false)}
        >
          {t('nav.projects')}
        </NavLink>
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
