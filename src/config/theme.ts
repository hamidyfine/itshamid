/**
 * Single style configuration — fonts, colors, layout, and theme tones.
 * CSS custom properties are generated from this file in global.css.
 */
export const theme = {
  fonts: {
    sans: "'Ubuntu', sans-serif",
    mono: "'Ubuntu Mono', monospace",
    googleUrl:
      'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Ubuntu+Mono:wght@400;700&display=swap',
  },
  colors: {
    cream: '#f7f4ef',
    cream2: '#f0ece4',
    white: '#ffffff',
    ink: '#1a1512',
    ink2: '#4a4640',
    ink3: '#8b857b',
    accent: '#E95420',
    accentHover: '#c8431a',
    accentDim: '#f4845f',
    accentBg: '#fdf0eb',
    border: '#e6ddd3',
    maroon: '#1c0806',
    success: '#2eb872',
  },
  layout: {
    navHeight: '62px',
    maxWidth: '1120px',
    padding: '48px',
    paddingMobile: '24px',
  },
  /** Background tone presets (cream, cream2, border, maroon) */
  tones: {
    warm: ['#f7f4ef', '#f0ece4', '#e6ddd3', '#1c0806'],
    neutral: ['#f7f7f6', '#efefed', '#e4e3e0', '#141414'],
    cool: ['#f4f6f8', '#eaeef1', '#dde3e8', '#0c1014'],
  },
  /** Active tone key — change to switch site background palette */
  activeTone: 'warm' as 'warm' | 'neutral' | 'cool',
} as const;

export type Theme = typeof theme;
