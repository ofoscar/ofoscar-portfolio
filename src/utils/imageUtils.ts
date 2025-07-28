export const getImageWithFallback = (
  imageUrl?: string,
  fallbackUrl?: string,
): string => {
  if (imageUrl && imageUrl.trim() !== '') {
    return imageUrl;
  }

  if (fallbackUrl && fallbackUrl.trim() !== '') {
    return fallbackUrl;
  }

  // Default placeholder image
  return 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
};

export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement>,
) => {
  const target = event.target as HTMLImageElement;
  target.src =
    'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
};
