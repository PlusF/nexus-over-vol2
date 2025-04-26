'use client';
import Image from 'next/image';

import imageLoader from '@/app/imageLoader';
import { BackButton } from '@/components/BackButton';
import { CastCard } from '@/components/CastCard';
import { Header } from '@/components/Header';

import sharedStyles from '../page.shared.module.css';

import styles from './Casts.module.css';
import React from 'react';

const judges = [
  {
    name: 'Runa Miura',
    rep: ['happen inn Mnchr-m', 'List::X'],
    profile: '',
    achievements: [],
    image: '/judge1.jpg',
    instagram: 'https://www.instagram.com/runa.miura.ss',
  },
  {
    name: 'Chris Ackey',
    rep: ['CyberAgent Legit', 'BrosBranco'],
    profile: '',
    achievements: [],
    image: '/judge2.jpg',
    instagram: 'https://www.instagram.com/chris_ackey',
  },
  {
    name: 'Kanizo',
    rep: ['VANDALISM', 'EDOGAWA'],
    profile: '',
    achievements: [],
    image: '/judge3.jpg',
    instagram: 'https://www.instagram.com/vandalism_kanizo',
  },
];

const dj = {
  name: 'OnokUro',
  rep: ['happen inn Mnchr-m'],
  role: 'DJ',
  profile: '',
  achievements: [],
  image: '/dj.jpg',
  instagram: 'https://www.instagram.com/kodai_over',
};
const mc = {
  name: 'かかと',
  rep: ['44th', 'フローライト', 'Buckdown', 'So-hait'],
  profile: '',
  achievements: [],
  image: '/mc.jpg',
  instagram: 'https://www.instagram.com/kkt__wl',
};
const guestBattlers = [
  {
    name: 'Tait Angle',
    rep: ['35th', 'LDC'],
    profile: '',
    achievements: [],
    image: '/prelim-judge-1.jpg',
    instagram: 'https://www.instagram.com/aka_ango',
  },
  {
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
    name: '12|21',
    description: '(35th×38th)',
    image: '/showcase-house.jpg',
  },
  {
    name: 'O&O',
    description: '(38th×40th×45th×46th)',
    image: '/showcase-jazz.jpg',
  },
  {
    name: '四畳飯店',
    description: '(39th×40th×41st)',
    image: '/showcase-pop.jpg',
  },
  {
    name: '八宝菜',
    description: '(41st×44th×45th)',
    image: '/showcase-lock.jpg',
  },
  {
    name: 'parfum',
    description: '(44th)',
    image: '/showcase-waack.jpg',
  },
  {
    name: '花燗',
    description: '(44th×45th)',
    image: '/showcase-hiphop.jpg',
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
        <Image alt={name} height={300} loader={imageLoader} src={image} width={300} />
      </div>
      <div>
        <h3 className={styles.showcaseName}>{name}</h3>
        <p className={styles.showcaseDescription}>{description}</p>
      </div>
    </div>
  );
};

export default function Casts() {
  const isAllCastsReleased = true;
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
              {isAllCastsReleased ? (
                judges.map((judge, index) => (
                  <CastCard
                    key={index}
                    achievements={judge.achievements}
                    image={judge.image}
                    instagram={judge.instagram}
                    name={judge.name}
                    profile={judge.profile}
                    rep={judge.rep}
                  />
                ))
              ) : (
                <div>coming soon...</div>
              )}
            </div>
          </section>
          <section className={styles.castsSection}>
            <h2 className={styles.sectionTitle}>DJ</h2>
            {isAllCastsReleased ? (
              <CastCard
                achievements={dj.achievements}
                image={dj.image}
                instagram={dj.instagram}
                name={dj.name}
                profile={dj.profile}
                rep={dj.rep}
              />
            ) : (
              <div>coming soon...</div>
            )}
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
            {guestBattlers.map((battler, index) => (
              <CastCard
                key={index}
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
              {showcases.map((showcase, index) => (
                <ShowcaseCard
                  key={index}
                  description={showcase.description}
                  image={isAllCastsReleased ? showcase.image : '/logo_trimmed_dark.png'}
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
