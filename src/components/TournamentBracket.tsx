'use client';

import { Battle } from '@/types/Tournament';
import styles from './TournamentBracket.module.css';

interface TournamentBracketProps {
  battles: Battle[];
}

export function TournamentBracket({ battles }: TournamentBracketProps) {
  // ラウンドごとにマッチを分類
  const battlesByRound = battles.reduce(
    (acc, battle) => {
      if (!acc[battle.round]) {
        acc[battle.round] = [];
      }
      acc[battle.round].push(battle);
      return acc;
    },
    {} as Record<number, Battle[]>
  );

  // 各ラウンドをポジション順でソート
  Object.values(battlesByRound).forEach(battles => {
    battles.sort((a, b) => a.position - b.position);
  });

  const renderParticipantCard = (battle?: Battle, isWinner?: boolean) => {
    if (battle?.name === '') {
      return (
        <div className={`${styles.participantCard} ${styles.empty}`}>
          <span className={styles.participantName}>?</span>
        </div>
      );
    }

    return (
      <div className={`${styles.participantCard} ${isWinner ? styles.winner : ''}`}>
        <span className={styles.participantName}>{battle?.name}</span>
      </div>
    );
  };

  const renderMatch = (key: string, battle1?: Battle, battle2?: Battle) => {
    return (
      <div className={styles.match} key={key}>
        <div className={styles.matchParticipants}>
          {renderParticipantCard(
            battle1,
            battlesByRound[(battle1?.round || 0) + 1]?.some(b => b.name === battle1?.name)
          )}
          {renderParticipantCard(
            battle2,
            battlesByRound[(battle2?.round || 0) + 1]?.some(b => b.name === battle2?.name)
          )}
        </div>
      </div>
    );
  };

  // 各ラウンドのマッチを取得
  const best16Matches = battlesByRound[1] || [];
  const best8Matches = battlesByRound[2] || [];
  const semifinalMatches = battlesByRound[3] || [];
  const finalMatches = battlesByRound[4] || [];

  return (
    <div className={styles.tournament}>
      <div className={styles.tournamentContainer}>
        {/* 左側のBest16 (1-4番目) */}
        <div className={styles.leftBest16}>
          <h3 className={styles.roundTitle}>Best16</h3>
          <div className={styles.matchesColumn}>
            {Array.from({ length: 4 }).map((_, index) => {
              const battle1 = best16Matches[index * 2];
              const battle2 = best16Matches[index * 2 + 1];
              return renderMatch(index.toString(), battle1, battle2);
            })}
          </div>
        </div>

        {/* 左側のBest8 (1-2番目) */}
        <div className={styles.leftBest8}>
          <h3 className={styles.roundTitle}>Best8</h3>
          <div className={styles.matchesColumn}>
            {Array.from({ length: 2 }).map((_, index) => {
              const battle1 = best8Matches[index * 2];
              const battle2 = best8Matches[index * 2 + 1];
              return renderMatch(index.toString(), battle1, battle2);
            })}
          </div>
        </div>

        {/* 左側の準決勝 (1番目) */}
        <div className={styles.leftSemifinal}>
          <h3 className={styles.roundTitle}>準決勝</h3>
          <div className={styles.matchesColumn}>
            {renderMatch('', semifinalMatches[0], semifinalMatches[1])}
          </div>
        </div>

        {/* 決勝 */}
        <div className={styles.final}>
          <h3 className={styles.roundTitle}>決勝</h3>
          <div className={styles.matchesColumn}>
            {renderMatch('', finalMatches[0], finalMatches[1])}
          </div>
        </div>

        {/* 右側の準決勝 (2番目) */}
        <div className={styles.rightSemifinal}>
          <h3 className={styles.roundTitle}>準決勝</h3>
          <div className={styles.matchesColumn}>
            {renderMatch('', semifinalMatches[2], semifinalMatches[3])}
          </div>
        </div>

        {/* 右側のBest8 (3-4番目) */}
        <div className={styles.rightBest8}>
          <h3 className={styles.roundTitle}>Best8</h3>
          <div className={styles.matchesColumn}>
            {Array.from({ length: 2 }).map((_, index) => {
              const battle1 = best8Matches[index * 2 + 4];
              const battle2 = best8Matches[index * 2 + 5];
              return renderMatch(index.toString(), battle1, battle2);
            })}
          </div>
        </div>

        {/* 右側のBest16 (5-8番目) */}
        <div className={styles.rightBest16}>
          <h3 className={styles.roundTitle}>Best16</h3>
          <div className={styles.matchesColumn}>
            {Array.from({ length: 4 }).map((_, index) => {
              const battle1 = best16Matches[index * 2 + 8];
              const battle2 = best16Matches[index * 2 + 9];
              return renderMatch(index.toString(), battle1, battle2);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
