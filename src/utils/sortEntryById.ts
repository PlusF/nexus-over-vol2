import { Entry } from '@/types/Entry';

export const sortEntryById = (a: Entry, b: Entry) => {
  const idA = a.id ?? '';
  const idB = b.id ?? '';
  if (idA > idB) {
    return 1;
  }
  return -1;
};
