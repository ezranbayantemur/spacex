import {DatePickerProps as RNDatePickerProps} from 'react-native-date-picker';

export interface DatePickerProps
  extends Omit<
    RNDatePickerProps,
    'modal' | 'mode' | 'date' | 'open' | 'onConfirm' | 'onCancel'
  > {
  onDateSelected: (date: Date) => void;
}

export type DatePickerStyleType = 'default' | 'dirty';