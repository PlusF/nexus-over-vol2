'use client';
import Image from 'next/image';

import imageLoader from '../imageLoader';

export default function LogoImage() {
  return (
    <div style={{ overflow: 'hidden', backgroundColor: 'black' }}>
      <main>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '2rem',
          }}
        >
          <Image
            alt="NEXUS OVER"
            height={400}
            loader={imageLoader}
            src="/logo_trimmed.png"
            width={400}
          />
        </div>
      </main>
    </div>
  );
}
