import {StyleSheet} from 'react-native';
import {color, font, padding} from '@style';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: '48%',
    width: '100%',
    alignSelf: 'center',
    tintColor: 'black',
  },
  title_container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: padding.MEDIUM,
  },
  header_title_text: {
    fontSize: 50,
    fontFamily: font.LIGHT,
    color: 'white',
    alignSelf: 'center',
  },
  content_text: {
    fontSize: 20,
    fontFamily: font.REGULAR,
    color: 'white',
    alignSelf: 'center',
  },
  footer: {
    flex: 0,
    backgroundColor: 'black',
  },
  separator: {
    height: 1,
    backgroundColor: color.SMOKE,
  },
});
