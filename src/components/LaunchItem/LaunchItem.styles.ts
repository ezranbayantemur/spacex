import {StyleSheet} from 'react-native';
import {font, padding, typography} from '@style';

export default StyleSheet.create({
  container: {
    margin: padding.SMALL,
    padding: padding.SMALL,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    marginRight: padding.SMALL,
    width: 50,
    height: 50,
  },
  name: {
    flex: 1,
    alignSelf: 'center',
    fontFamily: font.BOLD,
    fontSize: typography.BIG,
  },
  date: {
    fontFamily: font.REGULAR,
    fontSize: typography.MEDIUM,
  },
});
