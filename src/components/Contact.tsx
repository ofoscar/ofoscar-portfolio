import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactCard from './ContactCard';
import Footer from './Footer';
import Hero from './Hero';

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

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    business: '',
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  // Ref for ContactCard
  const contactCardRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent, form: HTMLFormElement) => {
    e.preventDefault();
    /* setLoading(true); */
    emailjs
      .sendForm(
        'service_vk962ka',
        'template_nn0i73f',
        form,
        '7ZW8TSNw8GdGThTnK',
      )
      .then((result) => {
        if (result.text === 'OK') {
          setStatus({
            type: 'success',
            message: t('contact.form.success'),
          });
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            phone: '',
            business: '',
          });
        }
      })
      .catch(() => {
        setStatus({
          type: 'error',
          message: t('contact.form.error'),
        });
      });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  // Scroll to ContactCard
  const scrollToContactCard = () => {
    contactCardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='min-h-screen flex flex-col items-center bg-gray-50'>
      {/* Hero Section */}
      <Hero
        title='Say Hello 👋'
        description='Got a project, idea, or just want to connect? I’d love to hear from you. Whether it’s collaboration, freelance work, or feedback — feel free to reach out.'
        backgroundImage='https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        buttonText='Start the Conversation'
        onButtonClick={scrollToContactCard}
        showSocials={true}
      />
      <div
        ref={contactCardRef}
        className='py-6 px-4 sm:py-8 sm:px-6 lg:py-[40px] w-full flex justify-center'
      >
        {/* Main Content */}
        <ContactCard
          formData={formData}
          status={status}
          isFormValid={!!isFormValid}
          profileImage='/profile.jpg'
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
