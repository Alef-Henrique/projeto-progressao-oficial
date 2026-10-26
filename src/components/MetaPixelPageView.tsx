import { useEffect, useRef } from 'react';
import { useRouter } from '../components/routing/RouterContext';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function MetaPixelPageView() {
  const { currentPath } = useRouter();
  const previousPath = useRef(currentPath);

  useEffect(() => {
    // A primeira visualização já é registrada no index.html.
    if (previousPath.current === currentPath) {
      return;
    }

    previousPath.current = currentPath;

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [currentPath]);

  return null;
}