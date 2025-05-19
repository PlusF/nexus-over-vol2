'use client';
import { BackButton } from '@/components/BackButton';
import { Header } from '@/components/Header';

import styles from '../page.shared.module.css';
import NextLinkButton from '@/components/NextLinkButton';
import Image from 'next/image';
import imageLoader from '../imageLoader';

export default function Rule() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <BackButton />
        <main className={styles.main}>
          <h1 className={styles.heading}>Rules</h1>

          <div className={styles.infoBox}>
            <h2 className={styles.subHeading}>当日予選</h2>
            <div className={styles.ruleSection}>
              <h3 className={styles.ruleHeading}>参加資格</h3>
              <p className={styles.infoText}>・一瞬でもWISHに在籍歴があること</p>
            </div>
            <div className={styles.ruleSection}>
              <h3 className={styles.ruleHeading}>エントリー費</h3>
              <p className={styles.infoText}>・3,500円（ドリチケ2枚込み）</p>
            </div>

            <div className={styles.ruleSection}>
              <h3 className={styles.ruleHeading}>形式</h3>
              <p className={styles.infoText}>・サークル形式</p>
              <p className={styles.infoText}>・10人程度のサークルごとに予選を進行</p>
              <p className={styles.infoText}>・45秒1ムーブ</p>
              <p className={styles.infoText}>
                ・ジャッジ3人の合計得点が高い順に本戦トーナメントの出場権を獲得
              </p>
            </div>

            <div className={styles.ruleSection}>
              <h3 className={styles.ruleHeading}>本戦トーナメント出場権</h3>
              <p className={styles.infoText}>1. 現役予選の優勝者が出場権を獲得済み</p>
              <p className={styles.infoText}>
                2. 当日予選の<span className={styles.highlight}>得点上位12名</span>が出場権獲得
              </p>
              <p className={styles.infoText}>
                3. 残った中で<span className={styles.highlight}>45代以下の得点上位1名</span>が
                出場権獲得
              </p>
              <p className={styles.infoText}>
                4. 残った中で<span className={styles.highlight}>得点上位2名</span>
                はワイルドカード枠としてゲストバトラーと対戦、勝者が出場権を獲得
              </p>
            </div>
          </div>
          <div className={styles.infoBox}>
            <h2 className={styles.subHeading}>本戦</h2>
            <div className={styles.ruleSection}>
              <h3 className={styles.ruleHeading}>形式</h3>
              <p className={styles.infoText}>・1on1</p>
              <p className={styles.infoText}>
                ・上記の本戦トーナメント出場権獲得者16名がフルトーナメントで対戦
              </p>
              <Image
                alt="トーナメント表"
                height={240}
                loader={imageLoader}
                src="/tournament.png"
                width={300}
                style={{ margin: '2rem auto' }}
              />
            </div>
            <div className={styles.ruleSection}>
              <h3 className={styles.ruleHeading}>Best16 & Best8</h3>
              <p className={styles.infoText}>・45秒1ムーブ</p>
              <p className={styles.infoText}>・延長戦は35秒1ムーブ</p>
            </div>
            <div className={styles.ruleSection}>
              <h3 className={styles.ruleHeading}>準決勝 & 決勝</h3>
              <p className={styles.infoText}>・45秒2ムーブ</p>
              <p className={styles.infoText}>・延長戦は45秒1ムーブ</p>
            </div>
          </div>
          <section className={styles.entryButtonContainer}>
            <NextLinkButton href="/entry">Entry</NextLinkButton>
          </section>
        </main>
      </div>
    </>
  );
}
