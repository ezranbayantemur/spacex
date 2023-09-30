import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import launches from '@mocks/launches.json';
import SearchBar from './SearchBar';

const mockOnSearch = jest.fn();

let wrapper: ReturnType<typeof render>;

jest.useFakeTimers();
describe('SearchBar unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <SearchBar
        testID="test"
        data={launches}
        searchKeys={['name']}
        onSearch={mockOnSearch}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render default placeholder correctly', () => {
    expect(wrapper.queryByPlaceholderText('Search...')).not.toBeNull();
  });

  it('should render custom placeholder correctly', () => {
    wrapper.rerender(
      <SearchBar
        data={launches}
        testID="test"
        searchKeys={['name']}
        onSearch={mockOnSearch}
        placeholder="Test placeholder..."
      />,
    );
    expect(wrapper.queryByPlaceholderText('Test placeholder...')).not.toBeNull();
  });

  it('should trigger search correctly', () => {
    const input = wrapper.getByTestId('test_searchbar_input');
    act(() => {
      fireEvent(input, 'onChangeText', 'trail');
      jest.advanceTimersByTime(200);
    });

    expect(mockOnSearch).toHaveBeenCalledWith([launches[2]]);
  });

  it('should trigger search with custom debounce correctly', () => {
    wrapper.rerender(
      <SearchBar
        testID="test"
        data={launches}
        searchKeys={['name']}
        onSearch={mockOnSearch}
        debounceTime={500}
      />,
    );

    const input = wrapper.getByTestId('test_searchbar_input');
    act(() => {
      fireEvent(input, 'onChangeText', 'trail');
      jest.advanceTimersByTime(500);
    });

    expect(mockOnSearch).toHaveBeenCalledWith([launches[2]]);
  });
});
