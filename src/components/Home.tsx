import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import HeroSlide from './HeroSlide';
import ProjectsSection from './ProjectsSection';
import RecentPostsSection from './RecentPostsSection';
import profile_img from '/profile.jpg'; // Example profile image import
function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/projects');
  };

  return (
    <div>
      {/* Hero Section/Slide */}
      <HeroSlide
        profileImage={profile_img}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        primaryButtonText={t('hero.cta')}
        onPrimaryClick={handleGetStarted}
      />
      {/* Main Content Section */}
      <div className='w-full px-4 sm:px-8 md:px-12 lg:px-[80px] py-6 sm:py-8 md:py-[40px] flex flex-col gap-12 sm:gap-8 md:gap-10'>
        {/* Projects Section */}
        <ProjectsSection />

        {/* Recent Posts Section */}
        <RecentPostsSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
