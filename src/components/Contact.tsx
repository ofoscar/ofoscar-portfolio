import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import GlassButton from './GlassButton';

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

const Contact = () => {
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
    <div className='min-h-screen flex flex-col items-center bg-gray-50'>
      {/* Hero Section */}
      <div className='relative w-full h-[450px] bg-gray-300'>
        <img
          src='https://images.unsplash.com/photo-1636955779321-819753cd1741?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Hero Background'
          className='absolute inset-0 w-full h-full object-cover'
          onLoad={() => console.log('Hero image loaded successfully')}
          onError={(e) => {
            console.error('Hero image failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='absolute inset-0 bg-opacity-40 flex items-start justify-center flex-col w-full py-[40px] px-[80px]'>
          <div className='flex flex-col max-w-[780px]'>
            <h1 className='text-6xl font-bold text-white w-full'>
              Say Hello 👋
            </h1>
            <p className='text-3xl text-white mt-2 w-full'>
              Got a project, idea, or just want to connect? I’d love to hear
              from you. Whether it’s collaboration, freelance work, or feedback
              — feel free to reach out.
            </p>
            <div className='mt-4'>
              <GlassButton className='gradient-border-wrapper text-lg md:text-2xl'>
                Start the Conversation
              </GlassButton>
            </div>
          </div>
        </div>
      </div>
      <div className='py-[60px] w-full flex justify-center'>
        {/* Main Content */}
        <div className='max-w-5xl w-full bg-white rounded-2xl shadow-lg flex'>
          {/* Image Section */}
          <div className='w-1/2 h-auto'>
            <img
              src='https://images.unsplash.com/photo-1495954380655-01609180eda3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Contact Us'
              className='w-full h-full object-cover rounded-l-2xl'
            />
          </div>

          {/* Form Section */}
          <div className='w-1/2 p-8'>
            {/* Form Header */}
            <div className='text-center mb-8'>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                Contact Me
              </h1>
              <p className='text-xl text-gray-600'>
                Always open to new opportunities and collaborations. Don't doubt
                in contacting me!
              </p>
            </div>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Field */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='Your name'
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
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='your.email@example.com'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  placeholder='Your phone number'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                />
              </div>

              {/* Business Name Field */}
              <div>
                <label
                  htmlFor='business'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Business Name
                </label>
                <input
                  type='text'
                  id='business'
                  name='business'
                  placeholder='Your business name'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Tell me about your project or question...'
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
                className='w-full bg-[#BF1A2F] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg focus:ring-4 focus:ring-red-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95'
              >
                {status.type === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
