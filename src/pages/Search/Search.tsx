import React from 'react';
import {SafeAreaView, View, FlatList, ListRenderItem} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {LaunchItem} from '@components';
import styles from './Search.styles';
import {usePostLaunchesMutation} from '../../redux/api';
import {Launch} from '@types';

const Search = () => {
  const route = useRoute<any>();
  const [fetch, {data}] = usePostLaunchesMutation();

  React.useEffect(() => {
    fetch({
      startDate: route.params.start,
      endDate: route.params.end,
    });
  }, []);

  const renderLaunch: ListRenderItem<Launch> = ({item}) => {
    return (
      <LaunchItem
        name={item.name}
        date={item.static_fire_date_utc}
        image={item.links.patch.small}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={data?.docs}
          renderItem={renderLaunch}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
