import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ContactButton from './ContactButton';

function DesktopNavigation() {
  const { t } = useTranslation();

  const handleBlogClick = () => {
    window.open('https://blog.ofoscar.com', '_blank');
  };

  return (
    <div className='hidden md:flex items-center space-x-8'>
      <Link to='/' className='nav-link'>
        {t('nav.home')}
      </Link>
      <Link to='/about' className='nav-link'>
        {t('nav.about')}
      </Link>
      <Link to='/projects' className='nav-link'>
        {t('nav.projects')}
      </Link>
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
