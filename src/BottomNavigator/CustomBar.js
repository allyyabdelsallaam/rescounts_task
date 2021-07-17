import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeIcon from '../../assets/home_icon';
import SearchIcon from '../../assets/search_icon';
import MyOrdersIcon from '../../assets/my_orders_icon';

function CustomTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                //console.log('options: ', state.routes);
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const setIcon = () => {
                    if (route.name === "HomePage") {
                        return <HomeIcon />
                    }
                    if (route.name === "SearchScreen") {
                        return <SearchIcon />
                    }
                    if (route.name === "OrdersScreen") {
                        return <MyOrdersIcon />
                    }
                    if (route.name === "Rewards") {
                        return <HomeIcon />
                    }
                }


                return (
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: '#E9D023',
                        }}>
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{
                                minHeight: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <View>
                                {setIcon()}
                            </View>
                            <Text style={{ color: '#000000' }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
}

export default CustomTabBar;