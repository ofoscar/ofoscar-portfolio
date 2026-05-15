import { useNavigate } from 'react-router-dom';
import { theme } from '../theme';
import GlassButton from './GlassButton';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1
          className='text-8xl font-extrabold mb-4'
          style={{ color: theme.colors.brand.primary }}
        >
          404
        </h1>
        <h2
          className='text-2xl font-bold mb-2'
          style={{ color: theme.colors.text.primary }}
        >
          Page Not Found
        </h2>
        <p
          className='text-base mb-8'
          style={{ color: theme.colors.text.secondary }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <GlassButton onClick={() => navigate('/')}>Back to Home</GlassButton>
      </div>
    </div>
  );
}

export default NotFound;
