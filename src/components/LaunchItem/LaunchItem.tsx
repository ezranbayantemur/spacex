import React from 'react';
import {Image, Text, View} from 'react-native';
import {format} from 'date-fns';
import styles from './LaunchItem.styles';
import type {LaunchItemProps} from './LaunchItem.types';

const LaunchItem = ({name, image, date}: LaunchItemProps) => {
  const formattedDate = format(new Date(date), 'dd MMMM yyyy');

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={{uri: image}} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
    </View>
  );
};

export default LaunchItem;
