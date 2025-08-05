import { useNavigate } from 'react-router-dom';
import { theme } from '../theme';
import GlassButton from './GlassButton';

function ProjectNotFound() {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1
          className='text-2xl font-bold mb-4'
          style={{ color: theme.colors.text.primary }}
        >
          Project Not Found
        </h1>
        <GlassButton onClick={() => navigate('/')}>Back to Home</GlassButton>
      </div>
    </div>
  );
}

export default ProjectNotFound;
