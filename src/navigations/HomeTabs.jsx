import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { CombinedDefaultTheme } from '../themes/AppTheme';


import Home from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import DMessage from '../screens/DMessageScreen';
import Upload from '../screens/UploadScreen';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Drawer, IconButton, Text } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import json from '../../assets/post.json';
import { StyleSheet, View } from 'react-native';
import ProfileItem from '../components/ProfileItem';
import CustomDrawerContent from '../components/CustomDrawerContent';
import {UploadDrawer,  HomeDrawer, ChatDrawer}  from './MyDrawers';
const Tab = createMaterialBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

 
export default function HomeTabs() {

    return (

        <Tab.Navigator
            theme={CombinedDefaultTheme}
            labeled={false}
            initialRouteName="Home"
            activeColor="#EBECFF"
            inactiveColor="#B6B9D9"
            labelStyle={{ fontSize: 12 }}>


            <Tab.Screen
                name="Home"
                component={HomeDrawer}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Upload"
                component={UploadDrawer}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="DMessage"
                component={ChatDrawer}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="chat-bubble" size={22} color={color} />
                    ),
                }}
            />
        </Tab.Navigator >

    )
}


const styles = StyleSheet.create({
    itemList: {

    }
})