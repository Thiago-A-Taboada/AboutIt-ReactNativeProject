import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Home from '../screens/HomeScreen';

const DrawerNav = createDrawerNavigator();

export default function MyDrawer() {
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