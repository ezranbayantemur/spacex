import {SafeAreaView, View, Text, Image} from 'react-native';
import {DateRangeSelector} from '@components';
import styles from './Home.styles';

const BACKGROUND_IMAGE = require('../../assets/rocket.png');

const Home = () => {
  const handleSearch = () => {};

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={BACKGROUND_IMAGE}
          />
          <View style={styles.title_container}>
            <Text style={styles.header_title_text}>SPACEX FLIGHTS</Text>
            <Text style={styles.content_text}>Search for flights</Text>

            <DateRangeSelector onSearch={console.log} />
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.footer} />
    </>
  );
};

export default Home;
