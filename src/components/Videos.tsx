import { useState } from 'react';
import { theme } from '../theme';
import aiThumbnail from '../assets/shorts/ai.png';
import Footer from './Footer';

type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
};

const videos: Video[] = [
  {
    id: 'O4QJd5FqLP8',
    title: 'My First YouTube Short',
    description: 'Check out my latest short!',
    thumbnail: aiThumbnail,
  },
];

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
    >
      <div
        className='relative flex flex-col gap-4 w-full max-w-sm'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute -top-10 right-0 text-white text-2xl font-bold leading-none'
          onClick={onClose}
          aria-label='Close'
        >
          ✕
        </button>
        <div className='rounded-xl overflow-hidden' style={{ aspectRatio: '9/16' }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full h-full border-0'
          />
        </div>
        <div>
          <h2
            className='text-lg font-semibold'
            style={{ color: '#ffffff', fontFamily: theme.typography.fontFamily.sans.join(', ') }}
          >
            {video.title}
          </h2>
          {video.description && (
            <p className='text-sm mt-1' style={{ color: '#d1d5db' }}>
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
      className='rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105'
      style={{
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border.light}`,
        boxShadow: theme.colors.shadow.md,
      }}
      onClick={onClick}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
    >
      <div className='relative' style={{ aspectRatio: '9/16' }}>
        <img
          src={video.thumbnail ?? `https://img.youtube.com/vi/${video.id}/0.jpg`}
          alt={video.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 flex items-center justify-center' style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
          <div
            className='w-14 h-14 rounded-full flex items-center justify-center'
            style={{ backgroundColor: theme.colors.brand.primary }}
          >
            <svg className='w-6 h-6 text-white ml-1' fill='white' viewBox='0 0 24 24'>
              <path d='M8 5v14l11-7z' />
            </svg>
          </div>
        </div>
      </div>
      <div className='p-3'>
        <p
          className='text-sm font-semibold truncate'
          style={{ color: theme.colors.text.primary, fontFamily: theme.typography.fontFamily.sans.join(', ') }}
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
    <div className='min-h-screen' style={{ backgroundColor: theme.colors.background }}>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1
          className='text-3xl sm:text-4xl font-bold mb-2'
          style={{ color: theme.colors.text.primary, fontFamily: theme.typography.fontFamily.sans.join(', ') }}
        >
          Videos
        </h1>
        <p className='text-base mb-10' style={{ color: theme.colors.text.secondary }}>
          Shorts, demos, and more.
        </p>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} onClick={() => setSelected(video)} />
          ))}
        </div>
      </div>

      <Footer />

      {selected && <VideoModal video={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default Videos;
