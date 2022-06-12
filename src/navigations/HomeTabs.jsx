import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { CombinedDefaultTheme } from '../themes/AppTheme';

import Explore from '../screens/ExploreScreen';
import Home from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import Notifications from '../screens/NotificationsScreen';
import DMessage from '../screens/DMessageScreen';
import Upload from '../screens/UploadScreen';

const Tab = createMaterialBottomTabNavigator();

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
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="compass"
                            color={color}
                            size={22}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Upload"
                component={Upload}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="DMessage"
                component={DMessage}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="chat-bubble" size={22} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={22} />
                    ),
                }}
            />

        </Tab.Navigator >

    )
}