import * as React from 'react';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { CombinedDefaultTheme } from '../themes/AppTheme';
import { AuthContext, AuthProvider } from '../context/AuthContext';

import HomeTabs from './HomeTabs';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



export default function MyNavigator({ navigation }) {

  const { authData, loading } = React.useContext(AuthContext)

  if (loading) {
    return <SplashScreen />
  }

  return (

    <NavigationContainer theme={CombinedDefaultTheme}>
      <Stack.Navigator theme={CombinedDefaultTheme} >

        {true ? (
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'SignIn',
              headerShown: false,

            }}
          />
        )
        }




      </Stack.Navigator>

    </NavigationContainer>

  );
}

{/* <Stack.Navigator theme={CombinedDefaultTheme} >
        {isLoggedIn ? (
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        ) : (
          <Stack.Screen name="Login" component={LogInScreen} options={{ headerShown: false }} />
        )}

      </Stack.Navigator> */}

{/*  <Tab.Navigator
        theme={CombinedDefaultTheme}
        labeled={false}
        initialRouteName="Home"
        activeColor="#EBECFF"
        inactiveColor="#B6B9D9"
        labelStyle={{ fontSize: 12 }}>
        {isLoggedIn ? (
          <>
 */}

{/*      <Tab.Screen
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
          </>
        ) : (
         <Tab.Screen name='Login' component={LoginStack} />

        )}
      </Tab.Navigator>*/}

