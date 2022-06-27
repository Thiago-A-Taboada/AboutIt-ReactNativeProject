import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Home from '../screens/HomeScreen';
import Upload from '../screens/UploadScreen';
import DMessage from '../screens/DMessageScreen';

const DrawerNav = createDrawerNavigator();

export function UploadDrawer() {
    return (
        <DrawerNav.Navigator
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <DrawerNav.Screen name='UploadDrawer' component={Upload} options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
            }} />

        </DrawerNav.Navigator>
    )
}


export function HomeDrawer() {
    return (
        <DrawerNav.Navigator
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >

            <DrawerNav.Screen name='HomeDrawer' component={Home} options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
            }} />
    
        </DrawerNav.Navigator>
    )
}

export function ChatDrawer() {
    return (
        <DrawerNav.Navigator
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >

            <DrawerNav.Screen name='ChatDrawer' component={DMessage} options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
            }} />
    
        </DrawerNav.Navigator>
    )
}