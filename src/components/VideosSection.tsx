import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { videos, type Video } from '../data/videos';
import { theme } from '../theme';

const sansFont = theme.typography.fontFamily.sans.join(', ');

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  useEffect(() => {
    document.body.classList.add('modal-open', 'overflow-hidden');
    return () => {
      document.body.classList.remove('modal-open', 'overflow-hidden');
    };
  }, []);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center px-[35px] py-4 md:p-4'
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
    >
      <div
        className='relative flex flex-col md:flex-row items-start gap-4 w-full max-w-sm md:max-w-3xl'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute -top-10 right-0 text-white text-2xl font-bold leading-none'
          onClick={onClose}
          aria-label='Close'
        >
          ✕
        </button>
        <div
          className='rounded-xl overflow-hidden flex-shrink-0 w-full md:w-64'
          style={{ aspectRatio: '9/16' }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full h-full border-0'
          />
        </div>
        <div className='hidden md:flex flex-col gap-2 md:h-[455px] md:overflow-y-auto'>
          <h2
            className='text-lg font-semibold'
            style={{ color: '#ffffff', fontFamily: sansFont }}
          >
            {video.title}
          </h2>
          {video.description && (
            <p
              className='text-sm line-clamp-1 md:line-clamp-none md:whitespace-pre-line'
              style={{ color: '#d1d5db' }}
            >
              {video.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function VideosSection() {
  const [selected, setSelected] = useState<Video | null>(null);
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center gap-[16px] md:gap-[32px] w-full px-4 sm:px-8 md:px-12 lg:px-[80px]'>
      <div className='text-center flex flex-col gap-2 w-full'>
        <h2
          className='text-3xl font-bold'
          style={{ color: theme.colors.text.primary, fontFamily: sansFont }}
        >
          Videos
        </h2>
        <p
          className='text-base sm:text-lg'
          style={{ color: theme.colors.text.secondary, fontFamily: sansFont }}
        >
          Shorts, demos, and more.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:flex md:flex-row md:justify-center md:gap-6'>
        {videos.map((video, i) => (
          <div
            key={video.id}
            className={`rounded-xl overflow-hidden cursor-pointer md:w-52 md:flex-shrink-0${i >= 2 ? ' hidden sm:block' : ''}`}
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border.light}`,
              boxShadow: theme.colors.shadow.md,
            }}
            onClick={() => setSelected(video)}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelected(video);
              }
            }}
          >
            <div className='relative' style={{ aspectRatio: '9/16' }}>
              <img
                src={
                  video.thumbnail ??
                  `https://img.youtube.com/vi/${video.id}/0.jpg`
                }
                alt={video.title}
                className='w-full h-full object-cover'
              />
              <div
                className='absolute inset-0 flex items-center justify-center'
                style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}
              >
                <div
                  className='w-14 h-14 rounded-full flex items-center justify-center'
                  style={{ backgroundColor: theme.colors.brand.primary }}
                >
                  <svg
                    className='w-6 h-6 ml-1'
                    fill='white'
                    viewBox='0 0 24 24'
                  >
                    <path d='M8 5v14l11-7z' />
                  </svg>
                </div>
              </div>
            </div>
            <div className='p-3'>
              <p
                className='text-sm font-semibold truncate'
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: sansFont,
                }}
              >
                {video.title}
              </p>
              {video.description && (
                <p
                  className='text-xs mt-1 truncate'
                  style={{ color: theme.colors.text.secondary }}
                >
                  {video.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/videos')}
        className='px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80'
        style={{
          backgroundColor: theme.colors.surfaceSecondary,
          color: theme.colors.text.primary,
          border: `1px solid ${theme.colors.border.light}`,
          fontFamily: sansFont,
        }}
      >
        See all videos →
      </button>

      {selected && (
        <VideoModal video={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default VideosSection;
