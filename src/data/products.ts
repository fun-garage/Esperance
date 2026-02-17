export type Badge = "NEW" | "PRE-ORDER" | null;

export type Product = {
  id: number;
  slug: string;
  categoryLabel: string;
  title: string;
  desc: string;
  tags: [string, string];
  badge?: Badge;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "tank-cover-type-s",
    categoryLabel: "EXTERIOR PARTS",
    title: "TANK COVER TYPE-S",
    desc: "純正形状を忠実に再現した軽量タンクカバー。\n裏面リブ構造の最適化により高剛性と軽量化…",
    tags: ["ABS Resin", "Bolt-on"],
    badge: "NEW",
  },
  {
    id: 2,
    slug: "billet-clutch-cover",
    categoryLabel: "ENGINE PARTS",
    title: "BILLET CLUTCH COVER",
    desc: "高精度マシニングセンタによるアルミ削り出し。\n独自のフィン形状が冷却効率を高め…",
    tags: ["AL-6061", "Anodized"],
  },
  {
    id: 3,
    slug: "carbon-tail-cowl",
    categoryLabel: "EXTERIOR PARTS",
    title: "CARBON TAIL COWL",
    desc: "金型成形ならではの精密なドライカーボンパーツ。\n空力を考慮したエッジデザインでリアビュー…",
    tags: ["Dry Carbon", "Matte/Gloss"],
    badge: "PRE-ORDER",
  },
  {
    id: 4,
    slug: "racing-rear-sets",
    categoryLabel: "CONTROL PARTS",
    title: "RACING REAR SETS",
    desc: "4ポジション可変式のバックステップキット。\n高剛性プレートがライダーの入力を確実に…",
    tags: ["4-Positions", "Bearing Pivot"],
  },
  {
    id: 5,
    slug: "aero-screen-long",
    categoryLabel: "EXTERIOR PARTS",
    title: "AERO SCREEN LONG",
    desc: "高速巡航時の風圧を軽減するロングスクリーン。\n透明度が高く、歪みのない視界を確保…",
    tags: ["Polycarbonate", "Smoke/Clear"],
  },
  {
    id: 6,
    slug: "fender-eliminator-kit",
    categoryLabel: "EXTERIOR PARTS",
    title: "FENDER ELIMINATOR KIT",
    desc: "リア周りをスッキリと見せるフェンダーレスキット。\nナンバー角度は保安基準適合設計…",
    tags: ["Steel Black", "LED Light"],
  },
];
