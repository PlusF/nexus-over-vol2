import { FaInstagram } from 'react-icons/fa';

import { Entry } from '@/types/Entry';

import styles from './EntryCard.module.css';

interface EntryCardProps {
  entry: Entry;
  index: number;
}

export const EntryCard = ({ entry, index }: EntryCardProps) => {
  const characterCount =
    (entry.generation?.length || 0) +
    (entry.genre?.length || 0) +
    (entry.entryName?.length || 0) +
    (entry.rep ? entry.rep.length : 0);
  const fontSize = Math.min(12 / (characterCount - 8), 1.5);

  return (
    <div key={`entry-${index}`} className={styles.entryContainer}>
      <div className={styles.entryInfo}>
        {entry.generation} {entry.genre}
        <div style={{ fontSize: `${fontSize}rem` }}>
          {entry.entryName} {entry.rep ? `rep. ${entry.rep}` : ''}
        </div>
      </div>
      {entry.instagram && (
        <div className={styles.instagram}>
          <a
            href={`https://www.instagram.com/${entry.instagram}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      )}
    </div>
  );
};
