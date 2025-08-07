import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../theme';
import CloudTextureBackground from './CloudTextureBackground';
import ProfileImage from './ProfileImage';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  business?: string;
}

interface FormStatus {
  type: 'idle' | 'sending' | 'success' | 'error';
  message?: string;
}

interface ContactCardProps {
  formData: FormData;
  status: FormStatus;
  isFormValid: boolean;
  profileImage?: string;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: (e: React.FormEvent, form: HTMLFormElement) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  formData,
  status,
  isFormValid,
  profileImage,
  onInputChange,
  onSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <div className='max-w-4xl w-full bg-white rounded-2xl flex flex-col lg:flex-row shadow-lg overflow-hidden'>
      {/* Moving Background Section with Profile Image */}
      <div
        className='w-full lg:w-2/5 h-60 sm:h-64 lg:h-auto lg:min-h-[500px] relative flex items-center justify-center overflow-hidden'
        style={{
          backgroundColor: theme.colors.surface,
          border: `1px solid ${theme.colors.border.light}`,
        }}
      >
        {/* Cloud Texture Background */}
        <CloudTextureBackground className='opacity-30' />

        {/* Overlay for better contrast */}
        <div
          className='absolute inset-0 bg-black opacity-40'
          aria-hidden='true'
        ></div>

        {/* Profile Image in center */}
        {profileImage && (
          <div className='relative z-10'>
            <ProfileImage src={profileImage} alt='Profile' />
          </div>
        )}
      </div>

      {/* Form Section */}
      <div className='w-full lg:w-3/5 p-4 sm:p-6 lg:p-8'>
        {/* Form Header */}
        <div className='text-center mb-4 lg:mb-6'>
          <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2'>
            Contact Me
          </h1>
          <p className='text-sm sm:text-base lg:text-lg text-gray-600'>
            Always open to new opportunities and collaborations. Don't doubt in
            contacting me!
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e, e.currentTarget);
          }}
          className='space-y-3 sm:space-y-4'
        >
          {/* Name Row (full width) */}
          <div>
            <label
              htmlFor='name'
              className='block text-xs sm:text-sm font-medium text-gray-700 mb-1'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={onInputChange}
              placeholder='Your name'
              className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              required
            />
          </div>

          {/* Email Row (full width) */}
          <div>
            <label
              htmlFor='email'
              className='block text-xs sm:text-sm font-medium text-gray-700 mb-1'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={onInputChange}
              placeholder='your.email@example.com'
              className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              required
            />
          </div>

          {/* Phone and Business Row */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
            <div>
              <label
                htmlFor='phone'
                className='block text-xs sm:text-sm font-medium text-gray-700 mb-1'
              >
                Phone Number
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={onInputChange}
                placeholder='Your phone number'
                className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              />
            </div>
            <div>
              <label
                htmlFor='business'
                className='block text-xs sm:text-sm font-medium text-gray-700 mb-1'
              >
                Business Name
              </label>
              <input
                type='text'
                id='business'
                name='business'
                value={formData.business}
                onChange={onInputChange}
                placeholder='Your business name'
                className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor='message'
              className='block text-xs sm:text-sm font-medium text-gray-700 mb-1'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              value={formData.message}
              onChange={onInputChange}
              placeholder='Tell me about your project or question...'
              className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none'
              required
            />
          </div>

          {/* Status Message */}
          {status.type !== 'idle' && (
            <div
              className={`p-3 rounded-lg text-sm ${
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
            className='w-full bg-[#BF1A2F] hover:bg-red-700 text-white font-medium py-2.5 px-4 text-sm rounded-lg focus:ring-4 focus:ring-red-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95'
          >
            {status.type === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
