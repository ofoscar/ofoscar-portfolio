import { theme } from '../theme';

function Home() {
  return (
    <div>
      {/* Hero Section/Slide */}
      <div
        className='w-full relative flex items-center justify-center overflow-hidden h-[480px] bg-cover bg-center'
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}

        {/* Content */}
        <div className='relative z-10 text-center max-w-4xl mx-auto px-4'>
          <h1
            className='text-5xl md:text-6xl font-bold mb-6 text-white'
            style={{
              fontFamily: theme.typography.fontFamily.sans.join(', '),
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Welcome Home
          </h1>
          <p
            className='text-xl md:text-2xl leading-relaxed text-white mb-8'
            style={{
              fontFamily: theme.typography.fontFamily.sans.join(', '),
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            Discover amazing experiences and beautiful moments
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              className='px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:transform hover:scale-105'
              style={{
                background: theme.colors.brand.gradient,
                boxShadow: theme.colors.shadow.lg,
              }}
            >
              Get Started
            </button>
            <button
              className='px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105 border-2 border-white text-white hover:bg-white hover:text-gray-900'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              Learn More
            </button>
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
