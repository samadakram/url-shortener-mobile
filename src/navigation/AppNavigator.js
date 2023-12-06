import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash/Splash';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signUp/SignUp';

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Splash'
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='SignIn'
                    component={SignIn}
                    options={{ headerShown: false, cardStyleInterpolator: forFade }}
                />
                <Stack.Screen
                    name='SignUp'
                    component={SignUp}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator