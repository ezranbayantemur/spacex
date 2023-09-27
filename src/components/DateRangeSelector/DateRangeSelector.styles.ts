import {StyleSheet} from 'react-native';
import {color, font, padding, typography} from '@style';

export default StyleSheet.create({
  container: {
    marginTop: padding.MEDIUM,
    padding: padding.MEDIUM,
    paddingHorizontal: padding.LARGE,
  },
  title: {
    fontSize: typography.NORMAL,
    fontFamily: font.REGULAR,
    color: color.ALABASTER,
    alignSelf: 'center',
  },
  spacer: {
    marginTop: padding.MEDIUM,
  },
});
