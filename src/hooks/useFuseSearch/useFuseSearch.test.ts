import {renderHook, act} from '@testing-library/react-hooks';
import launches from '@mocks/launches.json';
import useFuseSearch from './useFuseSearch';

const options = {
  keys: ['name'],
  threshold: 0.1,
};

describe('useFuseSearch unit tests', () => {
  it('should return base array on initial', () => {
    const {result} = renderHook(() => useFuseSearch(launches, options));

    expect(result.current.result).toEqual(launches);
  });

  it('should update the search results based on the query', () => {
    const {result} = renderHook(() => useFuseSearch(launches, options));

    act(() => {
      result.current.search('trail');
    });

    expect(result.current.result).toMatchObject([launches[2]]);
  });

  it('should return empty array if no search result found', () => {
    const {result} = renderHook(() => useFuseSearch(launches, options));

    act(() => {
      result.current.search('xyz');
    });

    expect(result.current.result).toEqual([]);
  });

  it('should initial array if search text is empty', () => {
    const {result} = renderHook(() => useFuseSearch(launches, options));

    act(() => {
      result.current.search('trail');
    });

    expect(result.current.result).toMatchObject([launches[2]]);

    act(() => {
      result.current.search('');
    });

    expect(result.current.result).toEqual(launches);
  });
});
