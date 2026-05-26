// Mirror of CSS custom properties in src/styles/globals.css.
// Use these from React islands that need theme values at runtime
// (the phone-screen components were authored with inline styles).
//
// Marketing CSS itself should reference var(--token) directly.

export const T = {
  pink:      '#EB4E8D',
  pinkOn:    '#FFFFFF',
  pinkSoft:  'rgba(235, 78, 141, 0.10)',
  pinkGlow:  'rgba(235, 78, 141, 0.16)',

  navy:      '#1A2B5F',
  navyDeep:  '#13204A',
  navyLift:  '#2C3D78',
  navyOn:    '#FFFFFF',
  navyDim:   'rgba(255, 255, 255, 0.65)',
  navyRule:  'rgba(255, 255, 255, 0.14)',

  paper:     '#F0EEE9',
  card:      '#FFFFFF',
  ink:       '#0F0F12',
  inkDim:    'rgba(15, 15, 18, 0.62)',
  inkMute:   'rgba(15, 15, 18, 0.42)',
  rule:      'rgba(15, 15, 18, 0.12)',

  success:   '#34C759',
  warn:      '#FF9F0A',
  danger:    '#FF3B30',
  peak:      '#FF9500',
} as const;

// Phone-screen-friendly theme object — keys match the `T` shape the
// original JSX preview screens read (`T.accent`, `T.label1`, etc).
// This lets the island ports stay as close to the source as possible.
export const phoneTheme = {
  accent:      T.pink,
  onAccent:    T.pinkOn,
  accentGlow:  T.pinkGlow,
  accentSoft:  T.pinkSoft,

  brand:       T.navy,
  brandDeep:   T.navyDeep,
  brandLift:   T.navyLift,
  onBrand:     T.navyOn,
  onBrandDim:  T.navyDim,

  bg:          '#F2F2F7',
  surface:     '#FFFFFF',
  surface2:    '#F8F8F8',
  surfaceTint: '#E9E9EE',

  label1:      '#000000',
  label2:      'rgba(60,60,67,0.60)',
  label3:      'rgba(60,60,67,0.30)',
  label4:      'rgba(60,60,67,0.18)',
  sep:         'rgba(60,60,67,0.12)',

  success:     T.success,
  warn:        T.warn,
  danger:      T.danger,
  peak:        '#FF9500',

  dark:        false,
  accentName:  'Moose',
} as const;

export type PhoneTheme = typeof phoneTheme;
