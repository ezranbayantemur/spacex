import React from 'react';
import {Text, View} from 'react-native';
import {isEqual} from 'date-fns';
import Button from '../Button';
import DatePicker from '../DatePicker';
import styles from './DateRangeSelector.styles';
import type {DateRangeSelectorProps} from './DateRangeSelector.types';

const DateRangeSelector = ({onSearch}: DateRangeSelectorProps) => {
  const [startDate, setStartDate] = React.useState<Date>(new Date());
  const [endDate, setEndDate] = React.useState<Date>(new Date());

  const handleOnSearch = () => {
    if (isEqual(startDate, endDate)) {
      return;
    }

    onSearch({
      start: startDate,
      end: endDate,
    });
  };

  return (
    <View style={styles.container}>
      <DatePicker maximumDate={endDate} onDateSelected={setStartDate} />
      <Text style={styles.title}>to</Text>
      <DatePicker minimumDate={startDate} onDateSelected={setEndDate} />
      <View style={styles.spacer} />
      <Button text="Search" onPress={handleOnSearch} />
    </View>
  );
};

export default DateRangeSelector;
