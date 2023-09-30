import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LaunchItem from './LaunchItem';

let wrapper: ReturnType<typeof render>;

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('LaunchItem unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <LaunchItem
        testID="launchitem"
        id="123"
        name={'FalconSat'}
        date={'2006-03-17T00:00:00.000Z'}
        image={'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png'}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render props correctly', () => {
    expect(wrapper.queryByText('FalconSat')).not.toBeNull();
    expect(wrapper.queryByText('17 March 2006')).not.toBeNull();
  });

  it('should trigger navigation correctly', () => {
    const touchable = wrapper.getByTestId('launchitem_touchable');
    fireEvent(touchable, 'onPress');

    expect(mockedNavigate).toHaveBeenCalledWith('LaunchDetailsScreen', {id: '123'});
  });
});
