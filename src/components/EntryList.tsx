'use client';
import { Entry } from '@/types/Entry';

import { EntryCard } from './EntryCard';
interface EntryListProps {
  entries: Entry[];
  isLoading: boolean;
}

export const EntryList = ({ entries, isLoading }: EntryListProps) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : entries.length === 0 ? (
        <p>No entries found</p>
      ) : (
        <>
          {entries.map((entry, index) => (
            <EntryCard key={`entry-${index}`} entry={entry} index={index} />
          ))}
        </>
      )}
    </div>
  );
};
