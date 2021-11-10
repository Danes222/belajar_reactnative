import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';
import { Blog } from './screens/blog.component'

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title='Blog'/>
  </TabBar>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <TopTabBar {...props} />}>
    <Screen name='Blog' component={Blog}/>
  </Navigator>
);

export const MenuNavigator = () => (
    <TabNavigator/>
);