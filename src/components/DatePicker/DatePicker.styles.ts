import {StyleSheet} from 'react-native';
import {color, font, padding, typography} from '@style';

const base = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: padding.SMALL,
    margin: padding.SMALL,
    borderWidth: 2,
  },
  date: {
    fontFamily: font.BOLD,
    fontSize: typography.MEDIUM,
  },
});

export default {
  default: {
    container: {
      ...base.container,
      borderColor: color.ALABASTER,
    },
    date: {
      ...base.date,
      color: color.ALABASTER,
    },
  },
  dirty: {
    container: {
      ...base.container,
      backgroundColor: color.SMOKE,
      borderColor: 'transparent',
    },
    date: {
      ...base.date,
      color: color.BLACK,
    },
  },
};
