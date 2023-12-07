import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../../screens/home/HomeScreen';
import Link from '../../screens/link/Link';
import Settings from '../../screens/settings/Settings';
import CustomDrawerContent from '../../components/customDrawer/CustomDrawerContent';
import Icon from 'react-native-vector-icons/Feather'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={
                {
                    // drawerActiveTintColor: '#0766ad',
                    drawerActiveTintColor: '#000000',
                    drawerInactiveTintColor: '#FFF',
                    drawerActiveBackgroundColor: 'rgba(255, 255, 255, 0.3)',
                }
            }
        >
            <Drawer.Screen
                name='Dashboard'
                component={HomeScreen}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="home"
                            size={size}
                            color={focused ? '#000000' : '#fff'}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name='Links'
                component={Link}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="link"
                            size={size}
                            color={focused ? '#0766ad' : '#fff'}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name='Settings'
                component={Settings}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="settings"
                            size={size}
                            color={focused ? '#0766ad' : '#fff'}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator