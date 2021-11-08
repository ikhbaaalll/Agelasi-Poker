import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, Main } from '../pages';
import { ColorBlack, ColorPrimary } from '../utils/constanta';

const Stack = createStackNavigator();

const Route = () => {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: ColorPrimary,
                },
                headerTitleStyle: {
                    color: ColorBlack,
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ gesturesEnabled: false }}
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ gesturesEnabled: false }}
            />
        </Stack.Navigator>
    );
};

export default Route;
