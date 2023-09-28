import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Input} from '@components';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {InputProps} from './Input.types';

const InputMeta: Meta<InputProps> = {
  argTypes: {
    onChangeText: {
      action: 'on change text',
    },
  },
  args: {
    placeholder: 'Search...',
    debounceTime: 0,
  },
  title: 'Input',
  component: Input,
};

export default InputMeta;

export const Basic: StoryObj<InputProps> = {};

export const WithError: StoryObj<InputProps> = {
  args: {
    errorMessage: 'This is an example error message',
  },
};

export const WithDebounce: StoryObj<InputProps> = {
  args: {
    debounceTime: 500,
  },
  decorators: [
    (_, options) => {
      const [textList, setTextList] = React.useState<string[]>([]);

      function handleChangeText(text: string) {
        setTextList(list => [...list, text]);
      }

      return (
        <View style={{padding: 10}}>
          <Input {...options.args} onChangeText={handleChangeText} />
          <FlatList
            data={textList}
            renderItem={({item}) => <Text>· {item}</Text>}
          />
        </View>
      );
    },
  ],
};
