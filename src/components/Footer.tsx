import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ConnectSection from './ConnectSection';
import NewsletterSection from './NewsletterSection';

interface FooterProps {
  className?: string;
}

function Footer({ className = '' }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer
      className={`w-full flex flex-col text-white ${className}`}
      style={{ backgroundColor: '#2F2F2F' }}
    >
      {/* Content Section */}
      <div className='px-8 py-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {/* About Section */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>
                {t('footer.about.title')}
              </h3>
              <p className='text-gray-300 text-sm leading-relaxed'>
                {t('footer.about.description')}
              </p>
            </div>

            {/* Newsletter Section */}
            <NewsletterSection />

            {/* Quick Links */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>
                {t('footer.quickLinks.title')}
              </h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    to='/projects'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {t('nav.projects')}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <a
                    href='https://blog.ofoscar.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {t('nav.blog')}
                  </a>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <ConnectSection />
          </div>
        </div>
      </div>

      {/* Developed By Section */}
      <div className='border-t border-gray-600 px-8 py-4'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400'>
          <p>{t('footer.copyright')}</p>
          <p className='mt-2 md:mt-0'>{t('footer.builtWith')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
