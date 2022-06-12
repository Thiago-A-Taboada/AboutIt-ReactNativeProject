import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import { CombinedDefaultTheme } from '../themes/AppTheme';

const Stack = createStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Login"
                theme={CombinedDefaultTheme}
                labeled={false}
                initialRouteName="Home"
                activeColor="#EBECFF"
                inactiveColor="#B6B9D9"
                labelStyle={{ fontSize: 12 }}
                component={SignInScreen}
            />
        </Stack.Navigator>
    )
}
