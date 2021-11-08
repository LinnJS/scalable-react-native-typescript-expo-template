import React from 'react'
import { Text as RNText, StyleProp, TextStyle } from 'react-native'

import tw from '../util/tailwind'

type TextProps = {
  type?: 'header' | 'subheader';
  children: string;
  style?: StyleProp<TextStyle>[];
};

export const Text = ({ type, children, style = [] }: TextProps) => {
  let textStyles: StyleProp<TextStyle>[] = [ tw`text-base` ]

  if (type === 'header') {
    textStyles.push(tw`mb-2 text-2xl font-bold`)
  } else if (type === 'subheader') {
    textStyles.push(tw`mb-1 text-xl text-gray-500`)
  }

  textStyles = [ ...textStyles, ...style ]

  return <RNText style={textStyles}>{children}</RNText>
}
