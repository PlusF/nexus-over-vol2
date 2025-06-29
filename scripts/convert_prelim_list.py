import pandas as pd

def convert_prelim_list(input_csv_path, output_csv_path):
    """
    予選サークルごとにグループ化し、予選サークル番号順にソートしてCSVを変換する
    
    Args:
        input_csv_path (str): 入力CSVファイルのパス
        output_csv_path (str): 出力CSVファイルのパス
    """
    # CSVファイルを読み込み
    df = pd.read_csv(input_csv_path)
    
    # 出力に必要な列のみを選択
    output_columns = ['代', 'ジャンル', 'エントリー名', 'rep.', '予選サークル', '予選サークル番号']
    df_selected = df[output_columns].copy()
    
    # 数値列を適切な型に変換
    df_selected['代'] = df_selected['代'].astype(int)
    df_selected['予選サークル番号'] = df_selected['予選サークル番号'].astype(int)
    
    # 予選サークルごとにグループ化し、予選サークル番号順にソート
    df_sorted = df_selected.groupby('予選サークル', group_keys=False).apply(
        lambda x: x.sort_values('予選サークル番号')
    ).reset_index(drop=True)
    
    # 結果をCSVファイルに出力
    df_sorted.to_csv(output_csv_path, index=False, encoding='utf-8-sig')
    
    print(f"変換完了: {input_csv_path} -> {output_csv_path}")
    print(f"総レコード数: {len(df_sorted)}")
    print("\n予選サークル別レコード数:")
    print(df_sorted['予選サークル'].value_counts().sort_index())
    
    return df_sorted

def main():
    # 変換を実行
    result_df = convert_prelim_list('prelim_list.csv', 'prelim_list_sorted.csv')

if __name__ == "__main__":
    main()
