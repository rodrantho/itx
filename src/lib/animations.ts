
import { useEffect, useRef, useState } from 'react';

type IntersectionObserverOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
