import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DatePicker from './DatePicker';

jest.useFakeTimers().setSystemTime(new Date('2010-01-01'));
const mockOnDateSelected = jest.fn();
jest.mock('react-native-date-picker', () => 'RNDatePicker');

let wrapper: ReturnType<typeof render>;

describe('DatePicker unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <DatePicker testID="datepicker" onDateSelected={mockOnDateSelected} />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the date label', () => {
    const picker = wrapper.getByTestId('datepicker_picker');
    fireEvent(picker, 'onConfirm', new Date('2020-01-01'));

    expect(wrapper.getByText('01 Jan 2020')).not.toBeNull();
  });

  it('should change the style when gets dirty', () => {
    const picker = wrapper.getByTestId('datepicker_picker');
    fireEvent(picker, 'onConfirm', new Date('2020-01-01'));

    const bgcolor = wrapper.getByTestId('datepicker_touchable').props.style
      .backgroundColor;

    expect(bgcolor).toBe('#BDBDBD');
  });
});
