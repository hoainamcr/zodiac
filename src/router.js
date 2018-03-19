import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import Chat from './components/Chat';

export const RootStack = StackNavigator(
    {
        Login: {
            screen: Login,
        },
        Home: {
            screen: Home,
        },
        Chat: {
            screen: Chat,
        },
    },
    {
        initialRouteName: 'Login',
    }
);
