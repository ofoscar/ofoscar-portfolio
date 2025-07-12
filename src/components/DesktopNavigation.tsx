import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

function DesktopNavigation() {
  const navigate = useNavigate();
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
      <button className='contact-btn' onClick={() => navigate('/contact')}>
        <div className='px-2'>{t('nav.contact')}</div>
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
              fillRule='evenodd'
              d='M5.5 4H12v6.5h-1V5.707l-6.146 6.147l-.708-.708L10.293 5H5.5z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default DesktopNavigation;
