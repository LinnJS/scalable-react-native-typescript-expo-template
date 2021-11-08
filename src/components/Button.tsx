import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native'

import tw from '../util/tailwind'

type ButtonProps = {
  onPress: () => void;
  children: string;
  type?: 'outline';
};

export const Button = ({
  onPress = () => {},
  children = '',
  type
}: ButtonProps) => {
  const containerStyles: StyleProp<ViewStyle>[] = [
    tw`py-4 my-2 bg-blue-800 border border-blue-800 rounded-md`
  ]
  const textStyles: StyleProp<TextStyle>[] = [
    tw`self-center text-xl font-medium text-white`
  ]

  if (type === 'outline') {
    containerStyles.push(tw`bg-transparent border-blue-800`)
    textStyles.push(tw`text-blue-800`)
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  )
}
