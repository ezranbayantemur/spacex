export interface SearchBarProps<T> {
  testID: string;
  data: T[];
  searchKeys: string[];
  onSearch: (result: T[]) => void;
  placeholder?: string;
  debounceTime?: number;
}
