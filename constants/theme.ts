/**
 * Theme tokens for the app (colors + typography + spacing + component tokens)
 * - Supports light/dark mode
 * - Central source of truth for styling
 */

import { Platform } from "react-native";

/** =========================
 *  Brand / Base Colors
 *  ========================= */
const BRAND_PRIMARY = "#13F287";
const BRAND_PRIMARY_DARK = "#16381f";
const WHITE = "#FFFFFF";
const BLACK = "#08150C";

/** Optional: derived tints for nice UI states */
const PRIMARY_10 = "rgba(19, 242, 135, 0.10)";
const PRIMARY_20 = "rgba(19, 242, 135, 0.20)";
const PRIMARY_40 = "rgba(19, 242, 135, 0.40)";

/** =========================
 *  Colors
 *  ========================= */
export const Colors = {
  light: {
    /** Brand */
    primary: BRAND_PRIMARY,
    primaryOposite: BRAND_PRIMARY_DARK,

    /** Base */
    background: WHITE,
    surface: "#F7FDF9", // soft green-ish background card
    text: BLACK,
    mutedText: "#3B4C41",

    /** UI */
    border: "#D7EDE0",
    icon: "#2F3A34",

    /** Feedback */
    success: BRAND_PRIMARY,
    warning: "#F6B73C",
    error: "#F44336",
    info: "#2F80ED",

    /** States */
    primarySoft: PRIMARY_10,
    primarySoftStrong: PRIMARY_20,
    overlay: "rgba(8, 21, 12, 0.35)",
  },

  dark: {
    /** Brand */
    primary: BRAND_PRIMARY_DARK,
    primaryOposite: BRAND_PRIMARY,

    /** Base */
    background: BLACK,
    surface: "#0E2215",
    text: WHITE,
    mutedText: "#B7D2C0",

    /** UI */
    border: "#1D3B28",
    icon: "#DFF7EA",

    /** Feedback */
    success: BRAND_PRIMARY,
    warning: "#F6B73C",
    error: "#EF5350",
    info: "#56CCF2",

    /** States */
    primarySoft: PRIMARY_20,
    primarySoftStrong: PRIMARY_40,
    overlay: "rgba(255, 255, 255, 0.10)",
  },
};

/** =========================
 *  Fonts (families / weights)
 *  ========================= */
export const Fonts = Platform.select({
  ios: {
    // If you are loading custom fonts using expo-font,
    // you will use your own families below (same for Android).
    sans: "MDNichromeRegular",
    serif: "MDNichromeRegular",
    rounded: "MDNichromeRegular",
    mono: "MDNichromeRegular",
  },
  default: {
    sans: "MDNichromeRegular",
    serif: "MDNichromeRegular",
    rounded: "MDNichromeRegular",
    mono: "MDNichromeRegular",
  },
  web: {
    // Web fallback (if your custom fonts are loaded via CSS or next/font)
    sans: "MDNichromeRegular, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial",
    serif: "MDNichromeRegular, Georgia, 'Times New Roman', serif",
    rounded: "MDNichromeRegular, system-ui, sans-serif",
    mono: "MDNichromeRegular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

/** =========================
 *  Typography scale
 *  ========================= */
export const FontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
};

export const FontWeights = {
  infra: "MDNichromeInfra",
  thin: "MDNichromeThin",
  light: "MDNichromeLight",
  normal: "MDNichromeRegular",
  dark: "MDNichromeDark",
  bold: "MDNichromeBold",
  black: "MDNichromeBlack",
  ultra: "MDNichromeUltra",
};

/** =========================
 *  Spacing + Radius (Suggested defaults)
 *  ========================= */
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 999,
};

/** =========================
 *  Shadows (Suggested defaults)
 *  ========================= */
export const Shadows = Platform.select({
  ios: {
    card: {
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 6 },
    },
  },
  android: {
    card: {
      elevation: 4,
    },
  },
  default: {
    card: {},
  },
});

/** =========================
 *  Component tokens: Buttons
 *  ========================= */
export const Components = {
  button: {
    primary: (mode: "light" | "dark" = "light") => {
      const c = Colors[mode];
      return {
        backgroundColor: c.primary,
        textColor: mode === "dark" ? BLACK : BLACK, // black text on neon green
        borderColor: "transparent",
        pressedBg: c.primary, // dark?
        disabledBg: mode === "dark" ? "#203027" : "#BFEFD7",
        disabledText: mode === "dark" ? "#7EA590" : "#2C4D3A",
      };
    },

    secondary: (mode: "light" | "dark" = "light") => {
      const c = Colors[mode];
      return {
        backgroundColor: c.primarySoft,
        textColor: c.text,
        borderColor: c.border,
        pressedBg: c.primarySoftStrong,
        disabledBg: mode === "dark" ? "#0D1D14" : "#EEF9F3",
        disabledText: c.mutedText,
      };
    },

    ghost: (mode: "light" | "dark" = "light") => {
      const c = Colors[mode];
      return {
        backgroundColor: "transparent",
        textColor: c.primary,
        borderColor: "transparent",
        pressedBg: c.primarySoft,
        disabledText: c.mutedText,
      };
    },
  },

  input: {
    field: (mode: "light" | "dark" = "light") => {
      const c = Colors[mode];
      return {
        backgroundColor: c.surface,
        textColor: c.text,
        placeholder: c.mutedText,
        borderColor: c.border,
        focusBorderColor: c.primary,
      };
    },
  },
};
