import React from 'react'
import { FlatList } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ListItem, ListSeparator } from '../components/List'
import { MainStackParams } from '../navigation/Main'
import tw from '../util/tailwind'

interface IScreens {
  title: string;
  subtitle: string;
  target: string;
}

const screens: IScreens[] = [
  {
    title: 'Text',
    subtitle: 'An example of using the Text.js components.',
    target: 'TextDemo'
  },
  {
    title: 'Form',
    subtitle: 'An example of using the Form.js components.',
    target: 'FormDemo'
  },
  {
    title: 'Button',
    subtitle: 'An example of using the Button.js components.',
    target: 'ButtonDemo'
  }
]

type IProps = {
  navigation: StackNavigationProp<MainStackParams, 'List'>;
};

export const List = ({ navigation }: IProps) => {
  return (
    <FlatList
      style={tw`flex-1 bg-gray-50`}
      data={screens}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.subtitle}
          // @ts-ignore
          onPress={() => navigation.push(item.target)}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
      ListHeaderComponent={ListSeparator}
      ListFooterComponent={ListSeparator}
    />
  )
}
