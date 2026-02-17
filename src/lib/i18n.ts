// src/lib/i18n.ts
export type Lang = "ja" | "en";

/**
 * ルール:
 * - /en で始まる場合は英語
 * - それ以外は日本語
 */
export function getLangFromPath(pathname: string): Lang {
  return pathname.startsWith("/en") ? "en" : "ja";
}

/**
 * 現在の言語に合わせたURLを作る
 * - lang=ja: /en を外す
 * - lang=en: /en を付ける
 */
export function withLangPrefix(path: string, lang: Lang): string {
  // pathは "/technology" や "/en/technology" などを想定
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withoutEn = normalized.replace(/^\/en(\/|$)/, "/");

  if (lang === "en") {
    // "/" -> "/en/"
    return withoutEn === "/" ? "/en/" : `/en${withoutEn}`;
  }

  // ja
  return withoutEn;
}
