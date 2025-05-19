import { FaInstagram } from 'react-icons/fa';

import { Audience } from '@/types/Audience';

import styles from './AudienceCard.module.css';

interface AudienceCardProps {
  audience: Audience;
  index: number;
}

export const AudienceCard = ({ audience, index }: AudienceCardProps) => {
  return (
    <div key={`audience-${index}`} className={styles.audienceContainer}>
      <div className={styles.audienceInfo}>
        {audience.generation} {audience.genre}
        <div style={{ fontSize: '1.45rem' }}>{audience.realName}</div>
      </div>
    </div>
  );
};
