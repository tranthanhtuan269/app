/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import QuizScreen from './app/screens/QuizScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        /> */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        <Stack.Screen name="Quiz" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
