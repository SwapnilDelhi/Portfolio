import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

export default function SmoothScroll() {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia(reducedMotionQuery).matches
  ));

  useEffect(() => {
    const mediaQuery = window.matchMedia(reducedMotionQuery);
    const handlePreferenceChange = (event) => setPrefersReducedMotion(event.matches);

    mediaQuery.addEventListener('change', handlePreferenceChange);
    return () => mediaQuery.removeEventListener('change', handlePreferenceChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    let disposed = false;
    let lenis;
    let gsap;
    let scrollTrigger;
    let updateScrollTrigger;
    let updateLenis;

    const initializeSmoothScroll = async () => {
      const [gsapModule, scrollTriggerModule] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (disposed) return;

      gsap = gsapModule.default;
      scrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(scrollTrigger);

      lenis = new Lenis({ autoRaf: false });
      updateScrollTrigger = () => scrollTrigger.update();
      updateLenis = (time) => lenis.raf(time * 1000);

      lenisRef.current = lenis;
      scrollTriggerRef.current = scrollTrigger;
      lenis.on('scroll', updateScrollTrigger);
      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);
      scrollTrigger.refresh();
    };

    initializeSmoothScroll();

    return () => {
      disposed = true;
      if (!lenis) return;

      lenis.off('scroll', updateScrollTrigger);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      lenisRef.current = null;
      scrollTriggerRef.current = null;
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    scrollTriggerRef.current?.refresh();
  }, [pathname]);

  return null;
}