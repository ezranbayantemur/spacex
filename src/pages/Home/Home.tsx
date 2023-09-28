import {SafeAreaView, View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DateRangeSelector} from '@components';
import styles from './Home.styles';
import {routes} from '@route';
import type {OnSearchCallbackProps} from '@components/DateRangeSelector';

const BACKGROUND_IMAGE = require('../../assets/rocket.png');

const Home = () => {
  const navigation = useNavigation<any>();

  const handleSearch = ({start, end}: OnSearchCallbackProps) => {
    navigation.navigate(routes.SEARCH, {start, end});
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={BACKGROUND_IMAGE}
          />
          <View style={styles.title_container}>
            <Text style={styles.header_title_text}>SPACEX FLIGHTS</Text>
            <Text style={styles.content_text}>Search for flights</Text>

            <DateRangeSelector onSearch={handleSearch} />
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.footer} />
    </>
  );
};

export default Home;
