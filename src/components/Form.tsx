import React from 'react'
import {
  TextInput as RNTextInput,
  View,
  StyleProp,
  ViewStyle,
  TextInputProps as RNTextInputProps
} from 'react-native'

import tw from '../util/tailwind'
import { Text } from './Text'

interface TextInputProps extends RNTextInputProps {
  label: string;
  errorText?: string;
}

export const TextInput = ({
  label,
  errorText = '',
  ...rest
}: TextInputProps) => {
  const borderStyles: StyleProp<ViewStyle> = [ tw`h-0.5 bg-gray-200` ]

  if (errorText && errorText.length > 0) {
    borderStyles.push(tw`bg-red-500`)
  }

  return (
    <View style={tw`mb-4`}>
      <Text style={[ tw`mb-1 text-lg text-gray-500` ]}>{label}</Text>
      <RNTextInput style={tw`pb-2 text-sm font-medium`} {...rest} />
      <View style={borderStyles} />
      <Text style={[ tw`mt-0.5 text-red-500` ]}>{errorText}</Text>
    </View>
  )
}
