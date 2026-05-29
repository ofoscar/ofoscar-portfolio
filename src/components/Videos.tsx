import { useEffect, useState } from 'react';
import { videos, type Video } from '../data/videos';
import { theme } from '../theme';
import Footer from './Footer';

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  useEffect(() => {
    document.body.classList.add('modal-open', 'overflow-hidden');
    return () => {
      document.body.classList.remove('modal-open', 'overflow-hidden');
    };
  }, []);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center px-[28px] py-4 md:p-4'
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

        {/* Video — fixed width on desktop so it keeps 9/16 ratio */}
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

        {/* Title + scrollable description */}
        <div className='hidden md:flex flex-col gap-2 md:h-[455px] md:overflow-y-auto'>
          <h2
            className='text-lg font-semibold'
            style={{
              color: '#ffffff',
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
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

function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <div
      className='rounded-xl overflow-hidden cursor-pointer w-[80vw] mx-auto md:w-52 md:mx-0 md:flex-shrink-0'
      style={{
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border.light}`,
        boxShadow: theme.colors.shadow.md,
      }}
      onClick={onClick}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className='relative' style={{ aspectRatio: '9/16' }}>
        <img
          src={
            video.thumbnail ?? `https://img.youtube.com/vi/${video.id}/0.jpg`
          }
          alt={video.title}
          className='w-full h-full object-cover object-top'
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
              className='w-6 h-6 text-white ml-1'
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
            fontFamily: theme.typography.fontFamily.sans.join(', '),
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
  );
}

function Videos() {
  const [selected, setSelected] = useState<Video | null>(null);

  return (
    <div
      className='min-h-screen flex flex-col'
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1'>
        <div className='flex items-start justify-between gap-4 mb-10'>
          <div>
            <h1
              className='text-3xl sm:text-4xl font-bold mb-2'
              style={{
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              Videos
            </h1>
            <p
              className='text-base'
              style={{ color: theme.colors.text.secondary }}
            >
              Shorts, demos, and more.
            </p>
          </div>
          <a
            href='https://www.youtube.com/@Ofosca'
            target='_blank'
            rel='noopener noreferrer'
            className='flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-opacity duration-200 hover:opacity-80'
            style={{
              backgroundColor: '#FF0000',
              color: '#ffffff',
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/>
            </svg>
            Follow
          </a>
        </div>

        <div className='flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-6'>
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => setSelected(video)}
            />
          ))}
        </div>
      </div>

      <Footer />

      {selected && (
        <VideoModal video={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default Videos;
