import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import PrivateRoutes from '../PrivateRoutes';

const Drawer = createDrawerNavigator();
export default function DrawerLayout() {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        //   drawerStyle: {
        //     borderTopRightRadius: 10,
        //     borderBottomRightRadius: 10,
       
        //   },
        }}
        drawerContent={() =>
             <CustomDrawer/>
        }
        >
        <Drawer.Screen name="PrivateRoutes" component={PrivateRoutes} />
      </Drawer.Navigator>
    </>
  );
}