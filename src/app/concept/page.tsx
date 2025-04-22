'use client';
import Image from 'next/image';

import imageLoader from '@/app/imageLoader';
import { BackButton } from '@/components/BackButton';
import { Header } from '@/components/Header';

import sharedStyles from '../page.shared.module.css';

import styles from './Concept.module.css';

// 運営陣のデータ
const teamMembers = [
  {
    id: 1,
    name: 'Ari',
    role: '運営統括',
    messages: [
      '本イベントの運営に携わらさせていただく中で、"WISH"という場所でダンスができることの意味を日々痛感しています。',
      '46年間紡がれてきた歴史と、絶えることのないダンサーたちの熱。',
      'WISHとこのイベントに携わるすべての方々にリスペクトの気持ちを込めて、私たちの情熱とこだわりを注ぎこんでいます。',
      'NExus Overが皆様にとって心地よい空間でありますように。',
      'ダンスしましょう！',
    ],
    image: '/ari.jpg',
  },
  {
    id: 2,
    name: 'Haruto',
    role: '運営統括',
    messages: [
      '究極、ダンスは人生に必要ありません。',
      'でも、私たちは想像以上にダンスに支えられながら生きていると思います。',
      'ダンスは、最高の遊び道具にも、自分と周りをつなぐきっかけにも、さらには自分の存在意義になることさえあると思います。',
      '本イベントを通して、そんなダンスに対して一人ひとりが持つ熱を全員で共有したい。そして、新たな熱を生み出したい。',
      '統合責任者のお二人をはじめ、初代運営陣の先輩方から多大なサポートをいただきながら、WISHにとって新鮮で刺激的な瞬間を提供できるよう、全力で取り組んでまいります。',
      'よろしくお願いいたします。',
    ],
    image: '/haruto.jpg',
  },
  {
    id: 3,
    name: '小次郎',
    role: '運営統括',
    messages: [
      '日常を変える機会は日々訪れます。',
      '偶然か必然か、心躍る方へ進んでいくと気付けばダンスに熱中していました。',
      'そこで出会った仲間達、そしていつも導いてくれる先輩方とともに、本イベントに全身全霊を注ぎます。',
      '参加していただいた全てのダンサーにとって、ダンスという選択がより一層心を躍らせるものとなれば幸いです。',
    ],
    image: '/kojiro.jpg',
  },
  {
    id: 4,
    name: 'かかと',
    role: '総合責任者',
    messages: [
      '本イベントを立ち上げて約1年、vol.1でいただいた反響は私達1人1人に届いております。',
      'ダンスというのは、人生を豊かにしてくれる究極の趣味だと私は考えています。踊る場所や機会がないなら創ればいい、そのためのノウハウを未来を担う現役運営陣に伝えながらvol.2に携わらせていただきました。進化し続ける新たなNEOを、皆様にお届けできることがこの上ない幸せです。',
      '「新たなイベント概念の構築と提示」を軸に昨年始動した本イベント、去年以上の衝撃をvol.2にてお約束します。全うご期待。',
    ],
    image: '/mc.jpg',
  },
  {
    id: 5,
    name: 'RoL',
    role: '総合責任者',
    messages: [
      'このイベントはWISHにしかできないし、今のWISHに必要な変化だと思っています。',
      '私たちは関わってくれる全ての人が幸せになれる場所を作ろうとしています。',
      'ダンスは始めたりやめたりするものではありません。',
      '音楽を楽しみ、ダンスを楽しみ、与え合い、次の世代に続けていきましょう。',
    ],
    image: '/rol.jpg',
  },
];

export default function Concept() {
  return (
    <>
      <Header />
      <div className={sharedStyles.container}>
        <BackButton />
        <main className={sharedStyles.main}>
          <h1 className={styles.sectionTitle}>Concept</h1>

          <section className={styles.conceptSection}>
            <div className={styles.conceptText}>
              <p>前回のコンセプトは「ストリート×WISH」</p>
              <p>シーンの最前線を走る豪華キャスト陣、そして46年という長い歴史を紡いできたWISH。</p>
              <p>会場は熱気に包まれ、ダンサー達の熱がより一層高まった。</p>
              <br />
              <p>
                vol.2のコンセプトは「熱の波及」
                <br />
                「ストリート×WISH」を継承しつつ、新たなうねりを起こしたい。
                <br />
                本イベントによってダンサー達の熱い想いがぶつかり、共鳴し合うことで、また新たな熱が生まれることを願っています。
              </p>
            </div>
          </section>

          <section className={styles.messageSection}>
            <h1 className={styles.sectionTitle}>Messages</h1>
            <div>
              {teamMembers.map(member => (
                <div key={member.id} className={styles.messageCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      fill
                      alt={member.name}
                      loader={imageLoader}
                      objectFit="cover"
                      src={member.image}
                    />
                  </div>
                  <div className={styles.messageContent}>
                    <h3 className={styles.messageName}>{member.name}</h3>
                    <p className={styles.messageRole}>{member.role}</p>
                    {member.messages.map((message, index) => (
                      <p key={index} className={styles.messageText}>
                        {message}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
