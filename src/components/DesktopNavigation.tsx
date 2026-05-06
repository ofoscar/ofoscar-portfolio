import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import ContactButton from './ContactButton';

function DesktopNavigation() {
  const { t } = useTranslation();

  const handleBlogClick = () => {
    window.open('https://blog.ofoscar.com', '_blank');
  };

  return (
    <div className='hidden md:flex items-center space-x-8'>
      <NavLink to='/' end className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
        {t('nav.home')}
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
        {t('nav.about')}
      </NavLink>
      <NavLink to='/projects' className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
        {t('nav.projects')}
      </NavLink>
      <button
        onClick={handleBlogClick}
        className='nav-link cursor-pointer border-none bg-transparent p-0'
      >
        {t('nav.blog')}
      </button>
      <ContactButton />
    </div>
  );
}

export default DesktopNavigation;
