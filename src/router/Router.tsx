import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from './routes';
import {Home, Search} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.HOME} component={Home} />
        <Stack.Screen name={routes.SEARCH} component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
