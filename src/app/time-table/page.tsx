import { BackButton } from '@/components/BackButton';
import { Header } from '@/components/Header';

import styles from '../page.shared.module.css';

// タイムテーブルのデータ
const scheduleData = [
  { time: '13:00', event: 'OPEN' },
  { time: '13:30', event: '受付終了' },
  { time: '13:40', event: 'showcase①' },
  { time: '14:10', event: 'バトル予選' },
  { time: '15:30', event: 'showcase②' },
  { time: '16:00', event: 'BEST16' },
  { time: '16:35', event: 'showcase③' },
  { time: '16:50', event: 'BEST8' },
  { time: '17:15', event: 'judge move' },
  { time: '17:35', event: '準決勝・決勝' },
  { time: '19:00', event: 'CLOSE' },
];

export default function TimeTable() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <BackButton />
        <main className={styles.main}>
          <h1 className={styles.heading}>Time Table</h1>

          <div className={styles.infoBox}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {scheduleData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem 0',
                    borderBottom:
                      index < scheduleData.length - 1
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : 'none',
                  }}
                >
                  <span style={{ fontWeight: 'bold', minWidth: '80px' }}>{item.time}</span>
                  <span style={{ flex: 1, textAlign: 'right' }}>{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
