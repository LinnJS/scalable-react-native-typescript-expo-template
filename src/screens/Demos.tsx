import React from 'react'
import { View, Alert } from 'react-native'

import { Text } from '../components/Text'
import { Button } from '../components/Button'
import { TextInput } from '../components/Form'
import { useLogin } from '../util/auth'
import tw from '../util/tailwind'

const containerStyle = tw.style('flex-1 bg-white p-8')

export const TextDemo = () => (
  <View style={containerStyle}>
    <Text type="header">This is a header</Text>
    <Text type="subheader">This is a subheader</Text>
    <Text>This is normal text</Text>
  </View>
)

export const FormDemo = () => {
  const { submit, errors, email, setEmail, password, setPassword } = useLogin()

  return (
    <View style={containerStyle}>
      <TextInput
        label="Email Address"
        placeholder="Enter your email..."
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        errorText={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        placeholder="Enter your password..."
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
        errorText={errors.password}
        autoCapitalize="none"
      />
      <Button onPress={submit}>Sign In</Button>
    </View>
  )
}

export const ButtonDemo = () => (
  <View style={containerStyle}>
    <Button onPress={() => Alert.alert('you pressed the default button')}>
      Default Button
    </Button>
    <Button
      type="outline"
      onPress={() => Alert.alert('you pressed the outline button')}
    >
      Outline Button
    </Button>
  </View>
)
