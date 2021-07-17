import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import SearchScreen from '../screens/SearchScreen';
import OrdersScreen from '../screens/OrdersScreen';
import Rewards from '../screens/Rewards';
import CustomTabBar from './CustomBar';

const Tab = createBottomTabNavigator();

export function BottomNavigator(props) {

    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} initialRouteName="Home" sceneContainerStyle={{ width: '100%', backgroundColor: 'transparent' }}>
                <Tab.Screen name="HomePage" options={{ tabBarLabel: "Home" }} component={HomePage} />
                <Tab.Screen name="SearchScreen" options={{ tabBarLabel: "Search" }} component={SearchScreen} />
                <Tab.Screen name="OrdersScreen" options={{ tabBarLabel: "Orders" }} component={OrdersScreen} />
                <Tab.Screen name="Rewards" options={{ tabBarLabel: "Rewards" }} component={Rewards} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}