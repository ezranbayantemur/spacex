import React from 'react';
import {View} from 'react-native';
import {useFuseSearch} from '@hooks';
import Input from '../Input';
import type {SearchBarProps} from './SearchBar.types';

const SearchBar = <T,>({
  data,
  testID,
  searchKeys,
  placeholder = 'Search...',
  debounceTime = 200,
  onSearch,
}: SearchBarProps<T>) => {
  const {result, search} = useFuseSearch<T>(data, {
    keys: searchKeys,
    threshold: 0.1,
  });

  const handleOnSearch = (text: string) => {
    search(text);
  };

  React.useEffect(() => {
    if (!result || !onSearch) {
      return;
    }

    onSearch(result);
  }, [result, onSearch]);

  return (
    <View>
      <Input
        testID={`${testID}_searchbar`}
        placeholder={placeholder}
        debounceTime={debounceTime}
        onChangeText={handleOnSearch}
        autoCapitalize="none"
      />
    </View>
  );
};

export default React.memo(SearchBar);
