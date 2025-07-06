import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../theme';

const CookiesPopup: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Show popup after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className='fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6'
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%)',
      }}
    >
      <div
        className='max-w-4xl mx-auto p-4 md:p-6 rounded-2xl shadow-2xl'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
          <div className='flex-1'>
            <div className='flex items-center gap-3 mb-2'>
              <span className='text-2xl'>🍪</span>
              <h3
                className='text-lg font-semibold'
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                {t('cookies.title')}
              </h3>
            </div>
            <p
              className='text-sm leading-relaxed'
              style={{
                color: theme.colors.text.secondary,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              {t('cookies.message')}
            </p>
          </div>

          <div className='flex gap-3 flex-shrink-0'>
            <button
              onClick={declineCookies}
              className='px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105'
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                color: theme.colors.text.secondary,
                border: '1px solid rgba(0, 0, 0, 0.1)',
              }}
            >
              {t('cookies.decline')}
            </button>
            <button
              onClick={acceptCookies}
              className='px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:scale-105'
              style={{
                backgroundColor: theme.colors.brand.primary,
                border: `1px solid ${theme.colors.brand.primary}`,
                boxShadow: '0 4px 12px rgba(191, 26, 47, 0.3)',
              }}
            >
              {t('cookies.accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPopup;
