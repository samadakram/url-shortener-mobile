import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash/Splash';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signUp/SignUp';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name='Splash' component={Splash} />
                <Stack.Screen name='SignIn' component={SignIn} />
                <Stack.Screen name='SignUp' component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator