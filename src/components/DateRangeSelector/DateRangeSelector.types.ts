export interface OnSearchCallbackProps {
  start: Date;
  end: Date;
}

export interface DateRangeSelectorProps {
  onSearch: (dates: OnSearchCallbackProps) => void;
}
