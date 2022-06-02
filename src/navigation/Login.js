import React from "react";
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const Login = () => {
    return (
        <NavigationContainer>
            <LoginStack />
        </NavigationContainer>
    );
};

const LoginStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
        </Stack.Navigator>
    )
} 

export default Login;