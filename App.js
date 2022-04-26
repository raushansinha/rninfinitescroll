// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider } from  'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import header from './src/shared/UIComponents/header';
import InfiniteListContainer from './src/screens/InfiniteList/InfiniteListContainer';
import ItemDetail from './src/screens/ItemDetail/ItemDetail';
import configureStore from './src/store/configureStore';

const Stack = createStackNavigator();
const store = configureStore({});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="InfiniteList" 
          component={InfiniteListContainer} 
          options={() => header("Marvel Characters")}
        />
        <Stack.Screen 
          name="Details" 
          component={ItemDetail} 
          options={() => header("Character Details")}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);