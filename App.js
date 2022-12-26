import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, } from 'react-native';
import Routes from './src/Routes';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppContextProvider } from './src/contexts';

const Drawer = createDrawerNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <AppContextProvider>
      <Routes /> 
      </AppContextProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
