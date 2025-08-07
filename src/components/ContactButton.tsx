import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface ContactButtonProps {
  variant?: 'desktop' | 'mobile';
  onMobileClick?: () => void;
}

function ContactButton({
  variant = 'desktop',
  onMobileClick,
}: ContactButtonProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/contact');
    if (onMobileClick) {
      onMobileClick();
    }
  };

  if (variant === 'mobile') {
    return (
      <button
        onClick={handleClick}
        className='contact-btn flex items-center justify-between px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 mt-2'
      >
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
    );
  }

  return (
    <button className='contact-btn' onClick={handleClick}>
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
  );
}

export default ContactButton;
