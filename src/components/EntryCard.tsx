import { FaInstagram } from 'react-icons/fa';

import { Entry } from '@/types/Entry';

import styles from './EntryCard.module.css';

interface EntryCardProps {
  entry: Entry;
  index: number;
}

export const EntryCard = ({ entry, index }: EntryCardProps) => {
  const getCharacterWidth = (str: string): number => {
    return Array.from(str).reduce((acc, char) => {
      // 全角文字は2、半角文字は1としてカウント
      return acc + (char.match(/[^\x01-\x7E\xA1-\xDF]/) ? 2 : 1);
    }, 0);
  };

  const characterWidth =
    getCharacterWidth(entry.generation || '') +
    getCharacterWidth(entry.genre || '') +
    getCharacterWidth(entry.entryName || '') +
    getCharacterWidth(entry.rep || '');

  const fontSize = Math.min(12 / (characterWidth / 2 - 4), 1.5);

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
