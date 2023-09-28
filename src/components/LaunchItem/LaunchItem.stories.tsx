import LaunchItem from './LaunchItem';
import type {Meta, StoryObj} from '@storybook/react-native';
import {LaunchItemProps} from './LaunchItem.types';

const LaunchItemMeta: Meta<LaunchItemProps> = {
  title: 'LaunchItem',
  component: LaunchItem,
  args: {
    name: 'FalconSat',
    date: '2006-03-17T00:00:00.000Z',
    image: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
  },
};

export default LaunchItemMeta;

export const Basic: StoryObj<LaunchItemProps> = {};
