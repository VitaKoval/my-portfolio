import palette from './palette'
import shadows from './shadows'
import primaryTheme from '../primaryTheme'

const secondaryTheme = {
  ...primaryTheme,
  name: 'dark',
  shadows,
  colors: palette,
}

export default secondaryTheme
