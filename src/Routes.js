import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrivateRoutes from './routes/PrivateRoutes'
import DrawerLayout from './routes/layouts/DrawerLayout'
import PublicRoutes from './routes/PublicRoutes'
import { useAppContext } from './contexts/AppContextProvider'

const Routes = () => {

  const {isLoggedIn} = useAppContext()
  
  return (
   isLoggedIn ?  <DrawerLayout/> : <PublicRoutes />
  )
}

export default Routes

const styles = StyleSheet.create({})