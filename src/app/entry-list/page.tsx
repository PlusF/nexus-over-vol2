'use client';
import sharedStyles from '../page.shared.module.css';
import entryListStyles from './EntryList.module.css';
import { BackButton } from '@/components/BackButton';
import React from 'react';
import { Entry } from '@/types/Entry';
import { FaInstagram } from 'react-icons/fa';

const parseEntry = (entry: string[]): Entry => {
  return {
    id: entry[0],
    realName: entry[1],
    entryName: entry[2],
    rep: entry[3],
    generation: entry[4],
    genre: entry[5],
    instagram: entry[6],
  };
};

export default function EntryList() {
  const [entries, setEntries] = React.useState<Entry[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch("/api/sheets");
        const data = await response.json();
        setEntries(data.slice(1).map(parseEntry));
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchEntries();
  }, []);

  console.log(entries);

  return (
    <div className={sharedStyles.container}>
      <BackButton />
      <main className={sharedStyles.main}>
        <h1 className={sharedStyles.heading}>Entry List</h1>
        <div className="entry-list">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {entries.map((entry, index) => {
                const characterCount = (entry.generation?.length || 0) + (entry.genre?.length || 0) + (entry.entryName?.length || 0) + (entry.rep ? entry.rep.length : 0);
                const fontSize = 12 / (characterCount - 8);
                return (
                  <div key={`entry-${index}`} className={entryListStyles.entryContainer}>
                    <div className={entryListStyles.entryInfo}>
                      {entry.generation} {entry.genre}
                      <div style={{ fontSize: `${fontSize}rem` }}>
                        {entry.entryName} {entry.rep ? `rep. ${entry.rep}` : ''}
                      </div>
                    </div>
                    {entry.instagram && (
                      <div className={entryListStyles.instagram}>
                        <a href={`https://www.instagram.com/${entry.instagram}`} target="_blank" rel="noopener noreferrer">
                          <FaInstagram />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </main>
    </div>
  );
} 