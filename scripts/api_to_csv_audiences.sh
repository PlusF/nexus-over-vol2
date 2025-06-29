#!/bin/bash

# API to CSV Converter (Audiences版)
# Usage: ./api_to_csv_audiences.sh [output_file]

# 設定
API_ENDPOINT="https://2o6ijocxi5.execute-api.ap-northeast-1.amazonaws.com/audiences"
OUTPUT_FILE="${1:-audiences.csv}"

# jqが利用可能かチェック
if ! command -v jq &> /dev/null; then
    echo "Error: jq is required but not installed."
    echo "Please install jq: https://stedolan.github.io/jq/"
    exit 1
fi

# curlが利用可能かチェック
if ! command -v curl &> /dev/null; then
    echo "Error: curl is required but not installed."
    exit 1
fi

echo "Fetching data from API..."

# APIからデータを取得し、CSV形式に変換（generation、genre、realNameのみ）
curl -s "$API_ENDPOINT" | \
jq -r '
# CSVヘッダーを出力
["generation", "genre", "realName"],
# データを代（generation）、ジャンル（genre）でソートしてからCSV行として出力
(sort_by(.generation, .genre)[] | [.generation, .genre, .realName])
| @csv' > "$OUTPUT_FILE"

# 結果をチェック
if [ $? -eq 0 ] && [ -s "$OUTPUT_FILE" ]; then
    echo "Successfully converted to CSV: $OUTPUT_FILE"
    echo "Number of records: $(( $(wc -l < "$OUTPUT_FILE") - 1 ))"
    echo ""
    echo "Preview (first 5 lines):"
    head -5 "$OUTPUT_FILE"
else
    echo "Error: Failed to convert data to CSV"
    exit 1
fi 