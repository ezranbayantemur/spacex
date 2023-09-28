import {StyleSheet} from 'react-native';
import {color, font, padding, typography} from '@style';

export default StyleSheet.create({
  container: {
    margin: padding.MEDIUM,
    padding: padding.MEDIUM,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  name: {
    fontFamily: font.BOLD,
    fontSize: typography.BIG,
  },
  date: {
    fontFamily: font.REGULAR,
    fontSize: typography.MEDIUM,
  },
});
