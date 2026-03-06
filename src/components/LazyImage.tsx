import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', style, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const baseFilter = style?.filter as string | undefined;
  const filter = loaded
    ? (baseFilter ?? 'none')
    : baseFilter
      ? `blur(10px) ${baseFilter}`
      : 'blur(10px)';

  return (
    <img
      src={src}
      alt={alt}
      loading='lazy'
      onLoad={() => setLoaded(true)}
      className={className}
      style={{
        ...style,
        filter,
        transition: `filter 0.4s ease${style?.transition ? `, ${style.transition}` : ''}`,
      }}
      {...props}
    />
  );
};

export default LazyImage;
