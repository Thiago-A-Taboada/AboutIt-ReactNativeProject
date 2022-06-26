import * as React from 'react';
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
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Drawer, IconButton, Text } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import json from '../../assets/post.json';
import { StyleSheet, View } from 'react-native';
import ProfileItem from '../components/ProfileItem';
const Tab = createMaterialBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

function CustomDrawerContent(props) {
    const [users, setUsers] = React.useState(json);


    return (
        <DrawerContentScrollView style={{ backgroundColor: '#232326' }}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', borderWidth: 0 }}>
                <Avatar.Icon size={120} icon="circle" />
                <Text style={{ fontSize: 25, color: '#B6B9D9' }}>Fulano</Text>
            </View>

            <ProfileItem title="Meu Perfil" icon="account" />
            <ProfileItem title="Criar uma comunidade" icon="forum" />
            <ProfileItem title="Salvos" icon="content-save" />
            <ProfileItem title="Meu Perfil" icon="history" />
          
            <DrawerItemList {...props} />
            <Text style={{ marginLeft: 10, marginTop: 40, marginBottom: 20 }}>Minhas Comunidades</Text>

            {users.map((i) => {
                return (<DrawerItem style={styles.itemList} key={i.id} label={i.communityName} />)
            })}
        </DrawerContentScrollView>

    )
}

function MyDrawer() {
    return (
        <DrawerNav.Navigator
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >

            <DrawerNav.Screen name='Home' component={Home} options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
            }} />

        </DrawerNav.Navigator>
    )
}

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
                name="HomeDrawer"
                component={MyDrawer}
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


const styles = StyleSheet.create({
    itemList: {

    }
})