import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
};

export default function ScrollToTop({ children }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch (e) {
      // fallback
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
