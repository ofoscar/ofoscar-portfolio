import { useEffect, useState } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only update if we've scrolled a meaningful amount (5px threshold)
      if (Math.abs(currentScrollY - prevScrollY) < 5) {
        return;
      }

      // Determine scroll direction
      const direction = currentScrollY > prevScrollY ? 'down' : 'up';

      // Always show navbar when at the top of the page (within 100px from top)
      if (currentScrollY < 100) {
        setVisible(true);
      } else {
        // Show navbar when scrolling up, hide when scrolling down
        setVisible(direction === 'up');
      }

      setScrollDirection(direction);
      setPrevScrollY(currentScrollY);
    };

    // Add throttling to improve performance
    let timeoutId: number;
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [prevScrollY]);

  return { scrollDirection, visible };
};
