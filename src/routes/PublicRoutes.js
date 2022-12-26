import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screen/Login'


const Stack = createNativeStackNavigator()

const PublicRoutes = () => {
  return (
    <Stack.Navigator
    initialRouteName='Login' >
    <Stack.Screen
      name='Login'
      component={Login}
     options={{headerShown:(false)}}
    />
  </Stack.Navigator>
  )
}

export default PublicRoutes

const styles = StyleSheet.create({})