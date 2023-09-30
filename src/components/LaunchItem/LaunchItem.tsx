import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {format} from 'date-fns';
import styles from './LaunchItem.styles';
import {useNavigation} from '@react-navigation/native';
import type {LaunchItemProps} from './LaunchItem.types';
import {routes} from '@route';

const LaunchItem = ({testID, id, name, image, date}: LaunchItemProps) => {
  const navigation = useNavigation<any>();
  const formattedDate = format(new Date(date), 'dd MMMM yyyy');

  const handleSelect = () => {
    navigation.navigate(routes.LAUNCH_DETAILS, {id});
  };

  return (
    <TouchableOpacity testID={`${testID}_touchable`} style={styles.container} onPress={handleSelect}>
      <Image style={styles.image} resizeMode="contain" source={{uri: image}} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
    </TouchableOpacity>
  );
};

export default LaunchItem;
