import React, { useEffect } from 'react';
import { theme } from '../theme';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV-ofoscar.pdf';
    link.download = 'Oscar-Ramirez-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className='fixed inset-0 bg-black/60 flex items-center justify-center z-[2000] p-4'
      onClick={handleBackdropClick}
    >
      <div
        className='bg-white rounded-lg max-w-4xl w-full h-[90vh] min-h-[70vh] overflow-hidden flex flex-col'
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: theme.colors.surface,
          border: `1px solid ${theme.colors.border.light}`,
          boxShadow: theme.colors.shadow.lg,
        }}
      >
        {/* Modal Header */}
        <div
          className='flex items-center justify-between p-4 border-b'
          style={{ borderColor: theme.colors.border.light }}
        >
          <h3
            className='text-xl font-semibold'
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            Resume
          </h3>
          <div className='flex items-center gap-3'>
            <button
              onClick={handleDownload}
              className='px-3 py-2 text-sm rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2'
              style={{
                backgroundColor: theme.colors.brand.primary,
                color: '#ffffff',
                border: `1px solid ${theme.colors.brand.primary}`,
              }}
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span className='hidden sm:inline'>Download PDF</span>
              <span className='sm:hidden'>Download</span>
            </button>
            <button
              onClick={onClose}
              className='text-2xl hover:scale-110 transition-transform duration-200 p-1'
              style={{ color: theme.colors.text.secondary }}
            >
              ×
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className='flex-1 overflow-hidden h-full'>
          {isMobile ? (
            // Mobile: Show download message since PDFs don't display well in mobile browsers
            <div className='flex flex-col items-center justify-center h-full p-8 text-center'>
              <div className='mb-6'>
                <svg
                  width='64'
                  height='64'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ color: theme.colors.brand.primary }}
                >
                  <path
                    d='M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <polyline
                    points='14,2 14,8 20,8'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <line
                    x1='16'
                    y1='13'
                    x2='8'
                    y2='13'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <line
                    x1='16'
                    y1='17'
                    x2='8'
                    y2='17'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <polyline
                    points='10,9 9,9 8,9'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h4
                className='text-xl font-semibold mb-4'
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                Resume Preview
              </h4>
              <p
                className='text-base mb-6 max-w-sm'
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                PDF preview is not available on mobile devices. Please download
                the file to view it.
              </p>
              <button
                onClick={handleDownload}
                className='px-6 py-3 text-base rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-3'
                style={{
                  backgroundColor: theme.colors.brand.primary,
                  color: '#ffffff',
                  border: `1px solid ${theme.colors.brand.primary}`,
                }}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Download Resume PDF
              </button>
            </div>
          ) : (
            // Desktop: Show PDF in iframe
            <iframe
              src='/CV-ofoscar.pdf'
              className='w-full h-full border-none'
              title='Oscar Ramirez Resume'
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
