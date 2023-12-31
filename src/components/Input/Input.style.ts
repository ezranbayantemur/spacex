import {StyleSheet} from 'react-native';
import {color, padding, font, typography} from '@style';

const base = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: color.MERCURY,
    paddingTop: padding.MEDIUM,
    paddingBottom: padding.SMALL,
    margin: padding.MEDIUM,
    marginVertical: padding.SMALL,
  },
  input: {
    padding: 0,
    fontFamily: font.REGULAR,
    fontSize: typography.NORMAL,
  },
});

export default {
  default: base,
  error: StyleSheet.create({
    container: {
      ...base.container,
      borderColor: 'red',
      borderWidth: 1,
    },
    input: base.input,
    error_text: {
      marginLeft: padding.SMALL,
      color: 'red',
      fontFamily: font.REGULAR,
      fontSize: typography.XSMALL,
    },
  }),
};
