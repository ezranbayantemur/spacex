import React from 'react';
import {SafeAreaView, View, FlatList, ListRenderItem} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {LaunchItem, SearchBar} from '@components';
import styles from './Search.styles';
import {usePostLaunchesMutation} from '../../redux/api';
import type {Launch} from '@types';

const Search = () => {
  const route = useRoute<any>();
  const [fetch, {data}] = usePostLaunchesMutation();
  const [launches, setLaunchesList] = React.useState<Launch[]>([]);

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

  const handleOnSearch = (searchResult: Launch[]) => {
    setLaunchesList(searchResult);
  };

  if (!data) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={launches}
          renderItem={renderLaunch}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListHeaderComponent={
            <SearchBar
              data={data.docs}
              searchKeys={['name']}
              // @ts-ignore: TODO: Generic type not recognized
              onSearch={handleOnSearch}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
