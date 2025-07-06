import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'sending' | 'success' | 'error';
  message?: string;
}

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'sending' });

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus({
        type: 'success',
        message: t('contact.form.success'),
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: t('contact.form.error'),
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            {t('contact.title')}
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      {t('contact.form.name')}
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      {t('contact.form.email')}
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                      required
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none'
                    required
                  />
                </div>

                {/* Status Message */}
                {status.type !== 'idle' && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : status.type === 'error'
                        ? 'bg-red-50 text-red-800 border border-red-200'
                        : 'bg-blue-50 text-blue-800 border border-blue-200'
                    }`}
                  >
                    {status.message || t(`contact.form.${status.type}`)}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={!isFormValid || status.type === 'sending'}
                  className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95'
                >
                  {status.type === 'sending'
                    ? t('contact.form.sending')
                    : t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className='space-y-8'>
            {/* Contact Info */}
            <div className='bg-white rounded-2xl shadow-lg p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-6'>
                {t('contact.info.title')}
              </h3>
              <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='w-5 h-5 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>
                      {t('contact.info.email')}
                    </p>
                    <p className='text-gray-900'>oscar@example.com</p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='w-5 h-5 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>
                      {t('contact.info.location')}
                    </p>
                    <p className='text-gray-900'>Remote / Worldwide</p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='w-5 h-5 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>
                      {t('contact.info.response')}
                    </p>
                    <p className='text-gray-900'>
                      {t('contact.info.responseValue')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className='bg-white rounded-2xl shadow-lg p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-6'>
                {t('contact.social.title')}
              </h3>
              <div className='space-y-3'>
                <a
                  href='https://github.com/ofoscar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group'
                >
                  <div className='flex-shrink-0'>
                    <svg
                      className='w-5 h-5 text-gray-400 group-hover:text-gray-600'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <span className='text-gray-900 group-hover:text-blue-600'>
                    {t('contact.social.github')}
                  </span>
                </a>

                <a
                  href='https://linkedin.com/in/ofoscar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group'
                >
                  <div className='flex-shrink-0'>
                    <svg
                      className='w-5 h-5 text-gray-400 group-hover:text-gray-600'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <span className='text-gray-900 group-hover:text-blue-600'>
                    {t('contact.social.linkedin')}
                  </span>
                </a>

                <a
                  href='https://twitter.com/ofoscar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group'
                >
                  <div className='flex-shrink-0'>
                    <svg
                      className='w-5 h-5 text-gray-400 group-hover:text-gray-600'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                    </svg>
                  </div>
                  <span className='text-gray-900 group-hover:text-blue-600'>
                    {t('contact.social.twitter')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
