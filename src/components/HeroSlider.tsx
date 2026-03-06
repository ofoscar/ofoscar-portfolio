import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import HeroSlide from './HeroSlide';

interface HeroSliderProps {
  profileImage?: string;
}

const INTERVAL = 5000;
const SCROLL_LOCK_MS = 800;

function HeroSlider({ profileImage }: HeroSliderProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollLocked = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      primaryButtonText: t('hero.cta'),
      onPrimaryClick: () => navigate('/projects'),
      gradientClassName: 'from-[#BF1A2F] to-[#2F2F2F]',
      profileImage,
    },
    {
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      primaryButtonText: t('hero.slide2.cta'),
      onPrimaryClick: () => navigate('/contact'),
      backgroundImage:
        'https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
  };

  const goTo = (index: number) => {
    setCurrent(index);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (scrollLocked.current) return;

      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      if (goingDown && current < slides.length - 1) {
        e.preventDefault();
        scrollLocked.current = true;
        goTo(current + 1);
        setTimeout(() => {
          scrollLocked.current = false;
        }, SCROLL_LOCK_MS);
      } else if (goingUp && current > 0) {
        e.preventDefault();
        scrollLocked.current = true;
        goTo(current - 1);
        setTimeout(() => {
          scrollLocked.current = false;
        }, SCROLL_LOCK_MS);
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [current]);

  return (
    <div ref={containerRef} className='relative overflow-hidden'>
      <div
        className='flex transition-transform duration-700 ease-in-out'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className='w-full flex-shrink-0'>
            <HeroSlide {...slide} />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className='hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20'>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === i ? 'w-6 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
