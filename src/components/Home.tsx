import Footer from './Footer';
import HeroSlider from './HeroSlider';
import ProjectsSection from './ProjectsSection';
import RecentPostsSection from './RecentPostsSection';
import profile_img from '/profile.jpg';
function Home() {

  return (
    <div>
      {/* Hero Section/Slide */}
      <HeroSlider profileImage={profile_img} />

      <div className='py-12 flex flex-col gap-24 items-center'>
        <ProjectsSection />
        <div className='w-full px-4 sm:px-8 md:px-12 lg:px-[80px]flex flex-col'>
          <RecentPostsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
