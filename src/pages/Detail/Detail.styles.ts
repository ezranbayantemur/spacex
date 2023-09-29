import {StyleSheet} from 'react-native';
import {font, padding, typography} from '@style';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inner_container: {
    flex: 1,
    padding: padding.MEDIUM,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  title: {
    marginVertical: padding.SMALL,
    fontFamily: font.BOLD,
    fontSize: typography.BIG,
    alignSelf: 'center',
  },
  status: {
    textAlign: 'right',
    fontFamily: font.BOLD,
    fontSize: typography.NORMAL,
  },
  details: {
    marginVertical: padding.MEDIUM,
    fontFamily: font.REGULAR,
    fontSize: typography.NORMAL,
  },
  info_container: {
    marginTop: padding.MEDIUM,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    fontFamily: font.BOLD,
    fontSize: typography.MEDIUM,
  },
});
