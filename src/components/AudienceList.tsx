'use client';
import { Audience } from '@/types/Audience';

import { AudienceCard } from './AudienceCard';

interface AudienceListProps {
  audiences: Audience[];
  isLoading: boolean;
}

export const AudienceList = ({ audiences, isLoading }: AudienceListProps) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : audiences.length === 0 ? (
        <p>観戦申込者はいません</p>
      ) : (
        <>
          {audiences.map((audience, index) => (
            <AudienceCard key={`audience-${index}`} audience={audience} index={index} />
          ))}
        </>
      )}
    </div>
  );
};
