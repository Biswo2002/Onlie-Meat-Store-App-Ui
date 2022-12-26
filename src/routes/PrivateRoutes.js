import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from '../screen/Welcome'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  Home  from '../screen/Home'

const Stack = createNativeStackNavigator()

const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName='Welcome' >
      <Stack.Screen
        name='Welcome'
        component={Welcome}
       options={{headerShown:(false)}}
      />
      <Stack.Screen
      name='Home'
      component={Home}
      />

    </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})