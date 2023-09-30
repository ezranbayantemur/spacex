export interface OnSearchCallbackProps {
  start: Date;
  end: Date;
}

export interface DateRangeSelectorProps {
  testID?: string;
  onSearch: (dates: OnSearchCallbackProps) => void;
}
