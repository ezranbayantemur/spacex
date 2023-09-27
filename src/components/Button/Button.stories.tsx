import React from 'react';
import {Alert, View} from 'react-native';
import Button from './Button';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {ButtonProps} from './Button.types';

const ButtonMeta: Meta<ButtonProps> = {
  argTypes: {
    onPress: {
      action: 'on press',
    },
  },
  args: {
    text: 'Button',
    loading: false,
    disabled: false,
    onPress: () => Alert.alert('Button', 'Pressed action'),
  },
  title: 'Button',
  component: Button,
};

export default ButtonMeta;

export const Basic: StoryObj<ButtonProps> = {};

export const WithOutline: StoryObj<ButtonProps> = {
  args: {
    type: 'outline',
  },
};
