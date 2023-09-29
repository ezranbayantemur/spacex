import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from './routes';
import {Home, Search, Detail} from '../pages';
import {color, font, typography} from '@style';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.HOME} component={Home} />
        <Stack.Screen
          name={routes.SEARCH}
          component={Search}
          options={{
            headerShown: true,
            headerTitle: 'SPACEX FLIGHTS',
            headerTitleStyle: {
              fontFamily: font.BOLD,
              fontSize: typography.MEDIUM,
            },
            headerBackTitleVisible: false,
            headerTintColor: color.BLACK,
          }}
        />
        <Stack.Screen
          name={routes.LAUNCH_DETAILS}
          component={Detail}
          options={{
            headerShown: true,
            headerTitle: 'SPACEX FLIGHTS',
            headerTitleStyle: {
              fontFamily: font.BOLD,
              fontSize: typography.MEDIUM,
            },
            headerBackTitleVisible: false,
            headerTintColor: color.BLACK,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
