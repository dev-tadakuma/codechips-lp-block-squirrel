# リスのどんぐり探し LP

Code Chips「リスのどんぐり探し」の紹介ページです。先生・教室運営者に教材の内容と利用条件を伝え、BOOTHの購入ページへ案内します。

- [BOOTH販売ページ](https://codechips.booth.pm/items/8985783)
- [制作・紹介記事（note）](https://note.com/codechips/n/n9092956a442b)
- [紹介動画（YouTube）](https://www.youtube.com/watch?v=UJUndfORpl0)

## ページの内容

- ファーストビューから移動できる、冒頭の大きな紹介動画
- 実際のゲーム画像と遊び方
- 向き・高さの読み取りと、全10ミッションの紹介
- 教室での起動・オフライン・保存・複数端末の利用
- 授業での問いかけ例、リスの動きに関する制作ノート
- 価格、BOOTHへの購入案内、よくある質問

## ローカルで確認

専用のビルドやパッケージのインストールは不要です。このフォルダで以下を実行し、ブラウザで `http://127.0.0.1:4317` を開きます。

```sh
python3 -m http.server 4317 --bind 127.0.0.1 --directory dist
```

終了は Ctrl+C です。

## 編集するファイル

| ファイル | 内容 |
| --- | --- |
| `dist/index.html` | 本文、価格、購入リンク、FAQ、メタデータ |
| `dist/style.css` | ページ全体のデザインとレスポンシブ表示 |
| `dist/story.css` | 紹介動画、学習ポイント、授業での問いかけ、制作ノートの表示 |
| `dist/script.js` | ミッションの内容とタブ切り替え |
| `dist/shared/lp-common.css` | Code Chips LPの共通フォント・色・見出し・ボタン |
| `docs/LP-STYLE-GUIDE.md` | Code Chips LPの共通スタイル仕様 |
| `dist/assets/` | 実際のゲーム画像とCode Chipsのロゴ |

JavaScriptの構文確認は `node --check dist/script.js` で行えます。`dist/` 全体を静的サイトとして配信できます。

## 参照情報・利用条件

2026年10月25日時点のプロジェクト資料と、制作者のnote紹介記事を参考に制作しました。価格は買い切り2,980円。年齢、授業時間、利用実績、学習効果の数値など、確認されていない情報は掲載していません。

note記事では改変を許可する記述がありますが、制作者の2026年10月25日の指示に従い、このLPではv1.0.4の「独自コードの改変・改変版の再配布には事前の許諾確認が必要」という条件を採用しています。

画像は制作者の既存素材を使用しています。このリポジトリに実行可能なゲーム本体は含みません。元のゲームや参照資料は編集していません。リポジトリの公開はコード・文章・画像の再利用許諾を意味しません。

## 共通スタイル

Code Chips LP Styleの共通仕様を適用しています。本文・見出し・ボタン・数字にはGoogle FontsのNoto Sans JP（400〜900）を読み込み、h1・h2は900。強調色は赤 `#F44336` と緑 `#00754a`、教室セクションの濃緑背景は `#006241` です。ヒーローの見出し内の強調は緑、eyebrowは親から色を継承します。

仕様は `docs/LP-STYLE-GUIDE.md`、共通CSSは `dist/shared/lp-common.css` に保持し、既存CSSの後から読み込みます。ヒーローの画像枠はアーチや破線を使わず、角丸20pxの一続きの枠にしています。ロゴとゲーム画面の画像内文字は元の素材のままです。

商品情報、ページ構成、PC用に拡大済みの文字サイズ、動画、リンク、アクセス解析はそのまま保持しています。

## 紹介動画

動画IDは `UJUndfORpl0` です。`dist/index.html` の冒頭付近（教材概要の直後）に、YouTubeのプライバシー強化モードのプレーヤーを16:9で埋め込んでいます。自動再生はせず、全画面表示に対応します。ヒーローとヘッダーの「紹介動画」から移動できます。

動画を差し替える場合は、iframeのURLと「YouTubeで見る」のリンクを更新してください。埋め込みが利用できない環境でも、YouTubeの動画ページへ直接進めます。

## アクセス解析

Google アナリティクス（GA4）の測定IDは `G-LFLGPGCN23` です。`dist/index.html` のhead内にGoogleタグ（gtag.js）を設定しています。測定IDを変更するときは、タグの読み込みURLと `gtag('config', ...)` の両方を更新してください。

本番への配置後に、Google アナリティクスのリアルタイム表示またはTag Assistantで受信を確認してください。Google Fonts・解析タグ・YouTubeの外部サービスを除き、LPの画像・CSS・JavaScriptは相対パスを維持しています。

## 本番配置先

想定する公開URLは **http://lp.codechips.net/block-squirrel/** です。`dist/` の**中身**を、公開サーバーの `block-squirrel/` フォルダ内に配置します。

```text
lp.codechips.net/
└── block-squirrel/
    ├── index.html
    ├── style.css
    ├── story.css
    ├── script.js
    ├── shared/
    │   └── lp-common.css
    └── assets/
        ├── codechips-logo.svg
        ├── favicon.svg
        ├── forest-scene.jpg
        └── game-screen.jpg
```

画像・CSS・JavaScript・faviconは `./assets/...`、`./style.css` などの相対パスで読み込みます。ページ内リンクもそのページ内で完結し、`lp.codechips.net/` 直下の他のLPと共存できます。配置先を固定する `<base>` タグは使用しません。

検索エンジン向けのcanonicalとSNS共有時の `og:url` は本番URL、`og:image` は `http://lp.codechips.net/block-squirrel/assets/forest-scene.jpg` を指定しています。これらは共有・検索用のメタデータで、ページ表示時の素材の読み込み先には使いません。

本番サーバーへの転送・自動デプロイは設定していません。上記のフォルダ配置で利用してください。URL末尾の `/` を保つか、サーバー側で `/block-squirrel` から `/block-squirrel/` へ転送してください。

## 確認用サイト

[確認用サイト](https://codechips-squirrel-learning.dev-tadakuma.chatgpt.site)はSitesで本人限定公開しています。このGitHubリポジトリへのpushは、SitesやGitHub Pagesへの自動公開を行いません。公開設定を変更する際は、閲覧範囲と公開先を確認してください。

Sitesの設定は、この作業フォルダ内のGit管理対象外の `.openai/hosting.json` に保持しています。既存のサイトを更新する際は同じサイトIDを使用します。

© Code Chips
