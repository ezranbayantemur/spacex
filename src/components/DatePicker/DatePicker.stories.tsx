import React from 'react';
import {Text, View} from 'react-native';
import {format} from 'date-fns';
import {color, font, padding, typography} from '@style';
import DatePicker from './DatePicker';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {DatePickerProps} from './DatePicker.types';

const DatePickerMeta: Meta<DatePickerProps> = {
  argTypes: {
    onDateSelected: {
      action: 'on selection',
    },
  },
  title: 'DatePicker',
  component: DatePicker,
  decorators: [
    Story => (
      <View style={{flex: 1, backgroundColor: color.BLACK}}>
        <Story />
      </View>
    ),
  ],
};

export default DatePickerMeta;

export const Basic: StoryObj<DatePickerProps> = {};

export const DateSelection: StoryObj<DatePickerProps> = {
  decorators: [
    () => {
      const [date, setDate] = React.useState<Date>(new Date());

      return (
        <View>
          <Text
            style={{
              color: color.ALABASTER,
              fontFamily: font.BOLD,
              fontSize: typography.MEDIUM,
              margin: padding.MEDIUM,
            }}>
            Selected Date:{' '}
            <Text
              style={{
                fontFamily: font.MEDIUM,
              }}>
              {format(date, 'dd MMMM yyyy')}
            </Text>
          </Text>
          <DatePicker onDateSelected={setDate} />
        </View>
      );
    },
  ],
};
