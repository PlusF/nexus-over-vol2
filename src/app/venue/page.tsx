import styles from '../page.shared.module.css';
import { BackButton } from '@/components/BackButton';
import Image from 'next/image';

export default function Venue() {
  return (
    <div className={styles.container}>
      <BackButton />
      <main className={styles.main}>
        <h1 className={styles.heading}>Venue</h1>
        <div className="venue-info">
          <h2>六本木CUBE</h2>
          <Image src="/venue.jpg" alt="六本木CUBE" width={300} height={150} />
          <br />
          <h3>住所</h3>
          <p>〒106-0041</p>
          <p>東京都港区麻布台3-4-11 中央飯倉ビルB1</p>
          <br />
          <h3>アクセス</h3>
          <p>六本木駅から徒歩10分</p>
          <p>六本木一丁目駅から徒歩10分</p>
          <p>神谷町駅から徒歩13分</p>
          <p>麻布十番駅から徒歩15分</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6673134991315!2d139.73410458802746!3d35.660567460456456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b9971fe6bad%3A0x450f201f19acce43!2z5YWt5pys5pyoQ1VCRQ!5e0!3m2!1sja!2sjp!4v1740245063899!5m2!1sja!2sjp" style={{ width: '100%', height: '450px', border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </main>
    </div>
  );
} 