import {View} from 'react-native';
import {color} from '@style';
import DateRangeSelector from './DateRangeSelector';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {DateRangeSelectorProps} from './DateRangeSelector.types';

const DateRangeSelectorMeta: Meta<DateRangeSelectorProps> = {
  argTypes: {
    onSearch: {
      action: 'on selection',
    },
  },
  title: 'DateRangeSelector',
  component: DateRangeSelector,
  decorators: [
    Story => (
      <View style={{flex: 1, backgroundColor: color.BLACK}}>
        <Story />
      </View>
    ),
  ],
};

export default DateRangeSelectorMeta;

export const Basic: StoryObj<DateRangeSelectorProps> = {};
