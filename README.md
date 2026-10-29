# 希伯來文第一冊 · 零基礎

給繁體中文使用者的希伯來文入門網站。

## 內容

- 從右到左的閱讀方向
- 22 個字母 + 5 個字尾形
- 5 個核心母音與拼讀
- 12 個第一批單字
- 問候、自我介紹、常用句
- 定冠詞、名詞性別、現在式
- 數字 1–10
- 10 題複習測驗

互動：字母卡、發音、單字翻卡、對話、測驗、進度儲存（localStorage）。

## 開啟

直接用瀏覽器打開 `index.html`，或：

```sh
cd hebrew-beginners
python3 -m http.server 4180
# http://127.0.0.1:4180
```

## 語音

`assets/audio/` 由 macOS 的希伯來文語音 Carmit 產生。要重新生成：

```sh
sh make-audio.sh
```

需要 macOS 的 `say` 與 `ffmpeg`。

## 技術

- 單頁 HTML / CSS / 原生 JS，無建置步驟
- 字體：Frank Ruhl Libre（希伯來文）、Noto Serif TC / Noto Sans TC（中文）
- 進度只存在瀏覽器，不上傳

## 注意

轉寫是學習輔助，不是唯一標準。希伯來文口語與聖經希伯來文在發音上也有差異；本課以現代以色列希伯來文為準。
