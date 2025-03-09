'use client';
import Image from 'next/image';

import imageLoader from '@/app/imageLoader';
import { BackButton } from '@/components/BackButton';
import { CastCard } from '@/components/CastCard';
import { Header } from '@/components/Header';

import sharedStyles from '../page.shared.module.css';

import styles from './Casts.module.css';

// キャストのデータ
const judges = [
  {
    id: 1,
    name: 'Runa Miura',
    rep: ['happen inn Mnchr-m', 'List::X'],
    profile: '',
    achievements: [],
    image: '/judge1.jpg',
    instagram: 'https://www.instagram.com/runa.miura.ss',
  },
  {
    id: 2,
    name: 'Chris Ackey',
    rep: ['CyberAgent Legit', 'BrosBranco'],
    profile: '',
    achievements: [],
    image: '/judge2.jpg',
    instagram: 'https://www.instagram.com/chris_ackey',
  },
];
const dj = {
  id: 3,
  name: 'Kodai',
  rep: ["Staill Diggin'", 'STRILLZ'],
  role: 'DJ',
  profile: '',
  achievements: [],
  image: '/dj.jpg',
  instagram: 'https://www.instagram.com/kodai_over',
};
const mc = {
  id: 4,
  name: 'かかと',
  rep: ['44th', 'フローライト', 'Buckdown', 'So-hait'],
  profile: '',
  achievements: [],
  image: '/mc.jpg',
  instagram: 'https://www.instagram.com/kkt__wl',
};
const guestBattlers = [
  {
    id: 5,
    name: 'Tait Angle',
    rep: ['35th', 'LDC'],
    profile: '',
    achievements: [],
    image: '/prelim-judge-1.jpg',
    instagram: 'https://www.instagram.com/aka_ango',
  },
  {
    id: 6,
    name: 'Frederick',
    rep: ['43rd', 'chic grandpas', '肩の友', 'So-hait'],
    profile: '',
    achievements: [],
    image: '/prelim-judge-2.jpg',
    instagram: 'https://www.instagram.com/mine.yk221',
  },
];

const showcases = [
  {
    id: 7,
    name: '12|21',
    description: '(35th×38th)',
    image: '/logo_trimmed_dark.png',
  },
  {
    id: 8,
    name: '四畳飯店',
    description: '(40th and more...)',
    image: '/logo_trimmed_dark.png',
  },
  {
    id: 9,
    name: '八宝菜',
    description: '(41st×44th×45th)',
    image: '/logo_trimmed_dark.png',
  },
  {
    id: 10,
    name: 'coming soon...',
    description: '',
    image: '/logo_trimmed_dark.png',
  },
  {
    id: 11,
    name: '鬼灯',
    description: '(44th×45th)',
    image: '/logo_trimmed_dark.png',
  },
  {
    id: 12,
    name: 'coming soon...',
    description: '',
    image: '/logo_trimmed_dark.png',
  },
];

const ShowcaseCard = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <div className={styles.showcaseCard}>
      <div className={styles.showcaseImageContainer}>
        <Image fill alt={name} loader={imageLoader} objectFit="cover" src={image} />
      </div>
      <div>
        <h3 className={styles.showcaseName}>{name}</h3>
        <p className={styles.showcaseDescription}>{description}</p>
      </div>
    </div>
  );
};

export default function Casts() {
  return (
    <>
      <Header />
      <div className={sharedStyles.container}>
        <BackButton />
        <main className={sharedStyles.main}>
          <h1 className={sharedStyles.heading}>Casts</h1>

          <section className={styles.castsSection}>
            <h2 className={styles.sectionTitle}>Judges</h2>
            <div style={{ marginBottom: '8rem' }}>
              coming soon...
              {false &&
                judges.map(judge => (
                  <CastCard
                    key={judge.id}
                    achievements={judge.achievements}
                    image={judge.image}
                    instagram={judge.instagram}
                    name={judge.name}
                    profile={judge.profile}
                    rep={judge.rep}
                  />
                ))}
            </div>
          </section>
          <section className={styles.castsSection}>
            <h2 className={styles.sectionTitle}>DJ</h2>
            <CastCard
              achievements={dj.achievements}
              image={dj.image}
              instagram={dj.instagram}
              name={dj.name}
              profile={dj.profile}
              rep={dj.rep}
            />
          </section>
          <section className={styles.castsSection}>
            <h2 className={styles.sectionTitle}>MC</h2>
            <CastCard
              achievements={mc.achievements}
              image={mc.image}
              instagram={mc.instagram}
              name={mc.name}
              profile={mc.profile}
              rep={mc.rep}
            />
          </section>
          <section className={styles.castsSection}>
            <h2 className={styles.sectionTitle}>Guest Battlers</h2>
            {guestBattlers.map(battler => (
              <CastCard
                key={battler.id}
                achievements={battler.achievements}
                image={battler.image}
                instagram={battler.instagram}
                name={battler.name}
                profile={battler.profile}
                rep={battler.rep}
              />
            ))}
          </section>
          <section className={styles.castsSection}>
            <h2 className={styles.sectionTitle}>Showcase</h2>
            <div className={styles.showcaseGrid}>
              {showcases.map(showcase => (
                <ShowcaseCard
                  key={showcase.id}
                  description={showcase.description}
                  image={showcase.image}
                  name={showcase.name}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
