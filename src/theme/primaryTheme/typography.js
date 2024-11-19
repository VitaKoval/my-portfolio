export const fontSizes = [
  '0.688rem', // xs // 11px
  '0.75rem', // sm // 12px
  '0.813rem', // md // 13px
  '0.875rem', // lg // 14px
  '0.938rem', // xl // 15px
  '1rem', // xxl // 16px
]

/*
  use rem if fontSize is bigger than xxl

  1.125rem // 18px 
  1.25rem // 20px
  1.75rem // 28px
  1.875rem // 30px
  2.5rem // 40px
  4.5rem // 72px
*/

fontSizes.xs = fontSizes[0]
fontSizes.sm = fontSizes[1]
fontSizes.md = fontSizes[2]
fontSizes.lg = fontSizes[3]
fontSizes.xl = fontSizes[4]
fontSizes.xxl = fontSizes[5]

export const fontWeights = [300, 400, 500, 600, 700]

fontWeights.light = fontWeights[0] // 300
fontWeights.regular = fontWeights[1] // 400
fontWeights.medium = fontWeights[2] // 500
fontWeights.semiBold = fontWeights[3] // 600
fontWeights.bold = fontWeights[4] // 700

export const lineHeights = ['1rem', '1.25rem', '1.5rem', '1.75rem', '2rem']

lineHeights.sm = lineHeights[0] // 16px
lineHeights.md = lineHeights[1] // 20px
lineHeights.lg = lineHeights[2] // 24px
lineHeights.xl = lineHeights[3] // 28px
lineHeights.xxl = lineHeights[4] // 32px
