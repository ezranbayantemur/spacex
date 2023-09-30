import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import styles from './DatePicker.styles';

import type {DatePickerProps, DatePickerStyleType} from './DatePicker.types';

const DatePicker = ({onDateSelected, testID, ...rest}: DatePickerProps) => {
  const [date, setDate] = React.useState(new Date());
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDirty, setIsDirty] = React.useState(false);

  const styleType: DatePickerStyleType = isDirty ? 'dirty' : 'default';

  const handleConfirm = (date: Date) => {
    setIsDirty(true);
    setIsOpen(false);
    setDate(date);
    onDateSelected(date);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <TouchableOpacity
      testID={`${testID}_touchable`}
      style={styles[styleType].container}
      onPress={() => setIsOpen(true)}>
      <Text style={styles[styleType].date}>{format(date, 'dd MMM yyyy')}</Text>
      <RNDatePicker
        {...rest}
        testID={`${testID}_picker`}
        modal
        mode="date"
        date={date}
        open={isOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </TouchableOpacity>
  );
};

export default DatePicker;
