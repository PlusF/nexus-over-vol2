import { NextRequest, NextResponse } from 'next/server';

const API_ENDPOINT = 'https://2o6ijocxi5.execute-api.ap-northeast-1.amazonaws.com/battles';

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { round, position, name } = body;

    if (!round || !position || !name) {
      return NextResponse.json(
        { error: 'Round, position, and name are required' },
        { status: 400 }
      );
    }

    // まず現在のバトルデータを取得
    const getBattlesResponse = await fetch(API_ENDPOINT);
    if (!getBattlesResponse.ok) {
      throw new Error(`Failed to fetch battles: ${getBattlesResponse.statusText}`);
    }

    const battles = await getBattlesResponse.json();

    // round と position に基づいて対応するバトルを見つける
    const targetBattle = battles.find(
      (battle: any) => battle.round === Number(round) && battle.position === Number(position)
    );

    if (!targetBattle) {
      return NextResponse.json(
        { error: `Battle not found for round ${round}, position ${position}` },
        { status: 404 }
      );
    }

    // 外部APIにPUTリクエストを送信（idを使用）
    const response = await fetch(API_ENDPOINT, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: targetBattle.id,
        round: Number(round),
        position: Number(position),
        name: String(name),
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating battle:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
