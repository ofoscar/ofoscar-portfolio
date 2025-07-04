import { theme } from '../theme';
import CloudTextureBackground from './CloudTextureBackground';
import HeroSlide from './HeroSlide';

function Home() {
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
        title='Welcome Home'
        subtitle='Discover amazing experiences and beautiful moments'
        primaryButtonText='Get Started'
        secondaryButtonText='Learn More'
        onPrimaryClick={handleGetStarted}
        onSecondaryClick={handleLearnMore}
      />

      {/* Bio Section */}
      <div className='w-full px-4 py-16'>
        <div
          className='w-full h-[640px] rounded-lg p-8 md:p-12 flex items-center relative overflow-hidden'
          style={{
            backgroundColor: theme.colors.surface,
            boxShadow: theme.colors.shadow.lg,
            border: `1px solid ${theme.colors.border.light}`,
          }}
        >
          {/* Cloud Texture Background */}
          <CloudTextureBackground className='opacity-30' />

          <div className='max-w-4xl mx-auto relative z-10'>
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              {/* Profile Image */}
              <div className='flex-shrink-0'>
                <div
                  className='w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 overflow-hidden'
                  style={{
                    border: `3px solid ${theme.colors.brand.primary}`,
                  }}
                >
                  <img
                    src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='Profile'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div className='flex-1 text-center md:text-left'>
                <h2
                  className='text-3xl md:text-4xl font-bold mb-4'
                  style={{
                    color: theme.colors.text.primary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                >
                  About Me
                </h2>
                <p
                  className='text-lg leading-relaxed mb-6'
                  style={{
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                >
                  I'm a passionate developer and creative professional dedicated
                  to building beautiful, functional experiences. With expertise
                  in modern web technologies and a keen eye for design, I bring
                  ideas to life through clean code and thoughtful user
                  interfaces.
                </p>
                <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
                  {['React', 'TypeScript', 'Node.js', 'Design', 'UI/UX'].map(
                    (skill) => (
                      <span
                        key={skill}
                        className='px-4 py-2 rounded-full text-sm font-medium'
                        style={{
                          backgroundColor: theme.colors.surfaceSecondary,
                          color: theme.colors.brand.primary,
                          border: `1px solid ${theme.colors.border.light}`,
                        }}
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='text-center max-w-2xl mx-auto'>
          <h2
            className='text-3xl font-bold mb-6'
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            Clean & Minimal Design
          </h2>
          <p
            className='text-lg leading-relaxed'
            style={{
              color: theme.colors.text.secondary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            Built with a beautiful theme system using #F9FAFB background and
            modern design principles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
