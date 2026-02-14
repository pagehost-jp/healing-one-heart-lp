# Healing One Heart LP

ヒーリング・コーチングサイトのプロトタイプLP（感覚確認用）

## プロジェクト概要

このLPは、50代の働く女性をターゲットにした、ヒーリング・コーチングサービスのプロトタイプです。
本番サイトではなく、**世界観・構成・コピーの方向性を確認するための検証用サンプル**として作成しています。

## ターゲット

- 50代の働く女性
- これまで人のために頑張ってきた方
- 心と体の健康を大切にしたい方

## デザインコンセプト

- **白ベース**：清潔感と安心感
- **余白多め**：ゆったりとした読みやすさ
- **やさしいピンク系**：温かみのあるアクセント
- **売り込み感を出さない**：静かな信頼感

## ページ構成

1. **ファーストビュー** - 抽象的すぎないコピーで共感を得る
2. **共感セクション** - ターゲットの気持ちに寄り添う
3. **サービスの考え方** - 「直す」ではなく「整う」という姿勢
4. **提供内容** - 3つのサポート内容（選ばせない設計）
5. **ストーリーセクション** - 活動の背景（美談ではない伝え方）
6. **CTA（行動導線）** - やさしい言葉で相談を促す
7. **フッター** - シンプルで安心感を損なわない

## 技術スタック

- HTML5
- CSS3
- JavaScript（最小限）
- GitHub Pages対応

## ローカルでの確認方法

1. プロジェクトフォルダで `index.html` をブラウザで開く
2. または、簡易サーバーで起動:
   ```bash
   python3 -m http.server 8000
   ```
   → http://localhost:8000 にアクセス

## GitHub Pagesでの公開手順

### 1. GitHubにリポジトリを作成

GitHub.comで新しいリポジトリを作成:
- リポジトリ名: `healing-one-heart-lp`
- Public設定

### 2. ローカルからプッシュ

```bash
# リモートリポジトリを追加
git remote add origin https://github.com/YOUR_USERNAME/healing-one-heart-lp.git

# ファイルをコミット
git add .
git commit -m "Initial commit: LP prototype"

# mainブランチにプッシュ
git branch -M main
git push -u origin main
```

### 3. GitHub Pagesを有効化

1. GitHubリポジトリのページで「Settings」をクリック
2. 左メニューから「Pages」を選択
3. Source: 「Deploy from a branch」を選択
4. Branch: 「main」「/ (root)」を選択して「Save」
5. 数分後、公開URLが表示されます
   - `https://YOUR_USERNAME.github.io/healing-one-heart-lp/`

## 注意事項

- このLPは**プロトタイプ（検証用）**です
- 完成度よりも**世界観と空気感**を優先しています
- コピーや構成は仮の状態です
- クライアントに「感覚で違和感を見つけてもらう」ためのたたき台です

## ファイル構成

```
healing-one-heart-lp/
├── index.html      # メインHTMLファイル
├── style.css       # スタイルシート
├── script.js       # JavaScript（スクロールアニメーション等）
└── README.md       # このファイル
```

## 開発履歴

### 2026年2月

**初期開発・デザイン実装**
- LP構成・デザイン実装
- プロフィール、サービス、ストーリーセクション追加
- レスポンシブデザイン対応

**証明書セクション改善**
- JSA認定証を追加（3列グリッドレイアウトに変更）
- 証明書画像のクリック拡大モーダル実装
- 画像WebP変換による最適化
- テキスト改行制御（nowrapスタイル適用）
- 証明書と説明文の間隔最小化

**GitHub公開**
- GitHub Pages設定・公開完了
- 公開URL: https://pagehost-jp.github.io/healing-one-heart-wellness/

**SEO対策実装**
- titleタグ最適化：「ふがてまり | ホリスティックヘルスコーチ | 心と体を整える腸活・心のブロック解除プログラム」
- meta description最適化（主要キーワード含む）
- 全画像のalt属性にSEOキーワード追加
  - プロフィール写真：「ふがてまり プロフィール写真 - ホリスティックヘルスコーチ」
  - プログラム画像：「心のブロック解除プログラム」「リバースエイジング・デトックスプログラム」等
- Google Search Console認証タグ追加
- meta keywordsに名前バリエーション追加
  - ふがてまり、フガテマリ、ふがて まり、フガテ マリ、fugatemari
  - 主要キーワード：ホリスティックヘルスコーチ、腸活、心のブロック解除、体質改善、50代女性

**英語版サイト制作**
- healing-one-heart-wellness-en リポジトリ作成
- 全セクション英語翻訳完了
- フォント変更：Noto Sans JP → Cormorant Garamond + Open Sans
- SEO対策（英語版）実施
  - titleタグ：「Mari Fugate | Holistic Health Coach | Gut Health & Mind-Body Wellness for Women Over 50」
  - meta keywords: Mari Fugate, fugatemari, holistic health coach, gut health, mind-body wellness
- UI改善：哲学セクションタイトルの改行調整
- 公開URL: https://pagehost-jp.github.io/healing-one-heart-wellness-en/

**リポジトリ名変更**
- `healing-one-heart-lp` → `healing-one-heart-wellness`
- ローカルremote URL更新完了

## ライセンス

© 2025 Healing One Heart Wellness. All rights reserved.
