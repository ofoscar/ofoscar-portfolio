import { useNavigate, useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { theme } from '../theme';
import Footer from './Footer';
import GlassButton from './GlassButton';

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        {' '}
        <div className='text-center'>
          {' '}
          <h1
            className='text-2xl font-bold mb-4'
            style={{ color: theme.colors.text.primary }}
          >
            {' '}
            Project Not Found{' '}
          </h1>{' '}
          <GlassButton onClick={() => navigate('/')}>
            {' '}
            Back to Home{' '}
          </GlassButton>{' '}
        </div>{' '}
      </div>
    );
  }
  return (
    <div className='min-h-screen'>
      <div className='py-8 px-4 sm:px-6 lg:px-8'>
        {' '}
        <div className='max-w-4xl mx-auto'>
          {' '}
          {/* Project Header */}{' '}
          <div className='mb-8'>
            {' '}
            <h1
              className='text-3xl sm:text-4xl font-bold mb-4'
              style={{
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              {' '}
              {project.title}{' '}
            </h1>{' '}
            <p
              className='text-lg leading-relaxed mb-6'
              style={{
                color: theme.colors.text.secondary,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              {' '}
              {project.fullDescription || project.description}{' '}
            </p>{' '}
            {/* Action Buttons */}{' '}
            <div className='flex flex-col sm:flex-row gap-4'>
              {' '}
              {project.demoUrl && (
                <GlassButton
                  onClick={() => window.open(project.demoUrl, '_blank')}
                  className='text-base'
                >
                  {' '}
                  View Live Demo{' '}
                </GlassButton>
              )}{' '}
              {project.codeUrl && (
                <GlassButton
                  onClick={() => window.open(project.codeUrl, '_blank')}
                  className='text-base'
                >
                  {' '}
                  View Source Code{' '}
                </GlassButton>
              )}{' '}
            </div>{' '}
          </div>{' '}
          {/* Project Image */}{' '}
          <div className='mb-8'>
            {' '}
            <img
              src={project.imageUrl}
              alt={project.title}
              className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg'
            />{' '}
          </div>{' '}
          {/* Technologies */}{' '}
          <div className='mb-8'>
            {' '}
            <h2
              className='text-2xl font-semibold mb-4'
              style={{
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              {' '}
              Technologies Used{' '}
            </h2>{' '}
            <div className='flex flex-wrap gap-3'>
              {' '}
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className='px-4 py-2 text-sm font-medium rounded-full'
                  style={{
                    backgroundColor: theme.colors.surfaceSecondary,
                    color: theme.colors.text.primary,
                    border: `1px solid ${theme.colors.border.light}`,
                  }}
                >
                  {' '}
                  {tech}{' '}
                </span>
              ))}{' '}
            </div>{' '}
          </div>{' '}
          {/* Detailed Sections */}
          {project.sections && project.sections.length > 0 && (
            <div className='mb-12'>
              <h2
                className='text-2xl font-semibold mb-8'
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                Project Deep Dive
              </h2>
              <div className='space-y-12'>
                {project.sections.map((section, index) => (
                  <div
                    key={index}
                    className='bg-opacity-50 rounded-lg p-6'
                    style={{
                      backgroundColor: theme.colors.surfaceSecondary,
                      border: `1px solid ${theme.colors.border.light}`,
                    }}
                  >
                    <h3
                      className='text-xl font-semibold mb-4'
                      style={{
                        color: theme.colors.text.primary,
                        fontFamily: theme.typography.fontFamily.sans.join(', '),
                      }}
                    >
                      {section.title}
                    </h3>
                    <p
                      className='text-base leading-relaxed mb-6'
                      style={{
                        color: theme.colors.text.secondary,
                        fontFamily: theme.typography.fontFamily.sans.join(', '),
                      }}
                    >
                      {section.description}
                    </p>
                    {section.imageUrl && (
                      <div className='mb-6'>
                        <img
                          src={section.imageUrl}
                          alt={section.title}
                          className='w-full h-48 sm:h-64 object-cover rounded-lg shadow-md'
                        />
                      </div>
                    )}
                    <ul className='space-y-3'>
                      {section.content.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className='flex items-start text-sm sm:text-base'
                          style={{ color: theme.colors.text.secondary }}
                        >
                          <span className='text-blue-500 mr-3 mt-1 flex-shrink-0'>
                            ▶
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Features */}{' '}
          {project.features && (
            <div className='mb-8'>
              {' '}
              <h2
                className='text-2xl font-semibold mb-4'
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                {' '}
                Key Features{' '}
              </h2>{' '}
              <ul className='space-y-2'>
                {' '}
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className='flex items-start'
                    style={{ color: theme.colors.text.secondary }}
                  >
                    {' '}
                    <span className='text-green-500 mr-2'>✓</span> {feature}{' '}
                  </li>
                ))}{' '}
              </ul>{' '}
            </div>
          )}{' '}
          {/* Challenges */}{' '}
          {project.challenges && (
            <div className='mb-8'>
              {' '}
              <h2
                className='text-2xl font-semibold mb-4'
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                {' '}
                Challenges Overcome{' '}
              </h2>{' '}
              <ul className='space-y-2'>
                {' '}
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className='flex items-start'
                    style={{ color: theme.colors.text.secondary }}
                  >
                    {' '}
                    <span className='text-orange-500 mr-2'>⚡</span> {challenge}{' '}
                  </li>
                ))}{' '}
              </ul>{' '}
            </div>
          )}{' '}
          {/* Learnings */}{' '}
          {project.learnings && (
            <div className='mb-8'>
              {' '}
              <h2
                className='text-2xl font-semibold mb-4'
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                {' '}
                Key Learnings{' '}
              </h2>{' '}
              <ul className='space-y-2'>
                {' '}
                {project.learnings.map((learning, index) => (
                  <li
                    key={index}
                    className='flex items-start'
                    style={{ color: theme.colors.text.secondary }}
                  >
                    {' '}
                    <span className='text-blue-500 mr-2'>💡</span> {learning}{' '}
                  </li>
                ))}{' '}
              </ul>{' '}
            </div>
          )}{' '}
        </div>{' '}
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetail;
