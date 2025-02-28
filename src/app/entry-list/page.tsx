'use client';
import { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';

import { BackButton } from '@/components/BackButton';
import { Header } from '@/components/Header';
import { Entry } from '@/types/Entry';

import sharedStyles from '../page.shared.module.css';

import entryListStyles from './EntryList.module.css';

const API_ENDPOINT = 'https://2o6ijocxi5.execute-api.ap-northeast-1.amazonaws.com/entries';

export default function EntryList() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        if (data.message === 'Internal Server Error') {
          throw new Error('Internal Server Error');
        } else {
          setEntries(data);
        }
      } catch (error) {
        console.error('エントリーの取得に失敗しました:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEntries();
  }, []);

  return (
    <>
      <Header />
      <div className={sharedStyles.container}>
        <BackButton />
        <main className={sharedStyles.main}>
          <h1 className={sharedStyles.heading}>Entry List</h1>
          <div className="entry-list">
            {isLoading ? (
              <p>Loading...</p>
            ) : entries.length === 0 ? (
              <p>No entries found</p>
            ) : (
              <>
                {entries.map((entry, index) => {
                  const characterCount =
                    (entry.generation?.length || 0) +
                    (entry.genre?.length || 0) +
                    (entry.entryName?.length || 0) +
                    (entry.rep ? entry.rep.length : 0);
                  const fontSize = Math.min(12 / (characterCount - 8), 1.5);
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
                })}
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
