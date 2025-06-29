/**
 * roundとpositionからbattle idを計算する関数
 * トーナメント構造に基づいてidを算出します
 *
 * Round 1: 16人 (id: 1-16)
 * Round 2: 8人 (id: 17-24)
 * Round 3: 4人 (id: 25-28)
 * Round 4: 2人 (id: 29-30)
 * Round 5: 1人 (id: 31)
 */
export function calculateBattleId(round: number, position: number): string {
  const roundBaseIds: Record<number, number> = {
    1: 0, // Round 1: id = position (1-16)
    2: 16, // Round 2: id = 16 + position (17-24)
    3: 24, // Round 3: id = 24 + position (25-28)
    4: 28, // Round 4: id = 28 + position (29-30)
    5: 30, // Round 5: id = 30 + position (31)
  };

  const baseId = roundBaseIds[round];
  if (baseId === undefined) {
    throw new Error(`Invalid round: ${round}. Round must be between 1 and 5.`);
  }

  const calculatedId = baseId + position;
  // 各roundの最大値を超えていたらエラー
  if (round === 1 && calculatedId > 16) {
    throw new Error(`Invalid position: ${position}. Position must be between 1 and 16.`);
  } else if (round === 2 && calculatedId > 24) {
    throw new Error(`Invalid position: ${position}. Position must be between 1 and 8.`);
  } else if (round === 3 && calculatedId > 28) {
    throw new Error(`Invalid position: ${position}. Position must be between 1 and 4.`);
  } else if (round === 4 && calculatedId > 30) {
    throw new Error(`Invalid position: ${position}. Position must be between 1 and 2.`);
  } else if (round === 5 && calculatedId > 31) {
    throw new Error(`Invalid position: ${position}. Position must be between 1 and 1.`);
  }

  return calculatedId.toString();
}

/**
 * battle id からroundとpositionを逆算する関数（デバッグ用）
 */
export function parseBattleId(id: string): { round: number; position: number } {
  const numId = parseInt(id, 10);

  if (numId >= 1 && numId <= 16) {
    return { round: 1, position: numId };
  } else if (numId >= 17 && numId <= 24) {
    return { round: 2, position: numId - 16 };
  } else if (numId >= 25 && numId <= 28) {
    return { round: 3, position: numId - 24 };
  } else if (numId >= 29 && numId <= 30) {
    return { round: 4, position: numId - 28 };
  } else if (numId === 31) {
    return { round: 5, position: 1 };
  } else {
    throw new Error(`Invalid battle id: ${id}`);
  }
}
