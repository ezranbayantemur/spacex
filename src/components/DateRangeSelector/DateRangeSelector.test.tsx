import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DateRangeSelector from './DateRangeSelector';

jest.useFakeTimers().setSystemTime(new Date('2010-01-01'));
const mockOnDateSelected = jest.fn();
jest.mock('react-native-date-picker', () => 'RNDatePicker');

let wrapper: ReturnType<typeof render>;

describe('DateRangeSelector unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <DateRangeSelector
        testID="daterangepicker"
        onSearch={mockOnDateSelected}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should return correctly date range', () => {
    const start = wrapper.getByTestId('daterangepicker_start_picker');
    fireEvent(start, 'onDateSelected', new Date('2020-01-01'));

    const end = wrapper.getByTestId('daterangepicker_end_picker');
    fireEvent(end, 'onDateSelected', new Date('2021-01-01'));

    const button = wrapper.getByTestId('daterangepicker_button_touchable');
    fireEvent(button, 'onPress');

    expect(mockOnDateSelected).toHaveBeenCalledWith({
      start: new Date('2020-01-01'),
      end: new Date('2021-01-01'),
    });
  });
});
