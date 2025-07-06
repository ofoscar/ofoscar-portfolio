import { useTranslation } from 'react-i18next';
import BioCard from './BioCard';
import Footer from './Footer';
import HeroSlide from './HeroSlide';
import ProjectsSection from './ProjectsSection';
import RecentPostsSection from './RecentPostsSection';

function Home() {
  const { t } = useTranslation();
  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };

  const handleLearnMore = () => {
    console.log('Learn More clicked');
  };

  return (
    <div>
      {/* Hero Section/Slide */}
      <HeroSlide
        backgroundImage='https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        primaryButtonText={t('hero.cta')}
        onPrimaryClick={handleGetStarted}
        onSecondaryClick={handleLearnMore}
      />
      {/* Main Content Section */}
      <div className='w-full py-[50px] px-[80px]'>
        {/* Bio Section */}
        <div className='w-full px-4'>
          <BioCard profileImage='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        </div>

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
