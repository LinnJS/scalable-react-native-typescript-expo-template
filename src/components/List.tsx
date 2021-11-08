import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import tw from '../util/tailwind'
import { Text } from './Text'

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth
  }
})

type ListItemProps = {
  title: string;
  subtitle: string;
  onPress: () => void;
};

export const ListItem = ({
  title,
  subtitle,
  onPress = () => null
}: ListItemProps) => {
  const rowStyles = [ tw`py-2.5 px-4 bg-white` ]

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={rowStyles}>
        <Text style={[ tw`font-bold` ]}>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export const ListSeparator = () => (
  <View style={[ styles.separator, tw`bg-gray-300` ]} />
)
