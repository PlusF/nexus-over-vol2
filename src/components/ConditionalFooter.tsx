'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';

export const ConditionalFooter = () => {
  const pathname = usePathname();

  const hideFooterPaths = ['/logo-image', '/logo-text'];

  if (hideFooterPaths.some(path => pathname.includes(path))) {
    return null;
  }

  return <Footer />;
};
