import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {format} from 'date-fns';
import styles from './Detail.styles';
import {useGetLaunchQuery} from '../../redux/api';

const Detail = () => {
  const route = useRoute<any>();
  const {data} = useGetLaunchQuery(route.params.id);

  if (!data) {
    return;
  }

  const formattedDate = format(
    new Date(data.static_fire_date_unix),
    'dd MMMM yyyy',
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Image
          source={{uri: data.links.patch.large}}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.info_container}>
          <Text style={styles.date}>{formattedDate}</Text>
          <Text style={styles.status}>
            {data.success ? '✅ Success' : '❌ Failure'}
          </Text>
        </View>
        <Text style={styles.details}>{data.details}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
