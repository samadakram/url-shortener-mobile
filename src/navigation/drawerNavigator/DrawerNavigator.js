import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../../screens/home/HomeScreen';
import Link from '../../screens/link/Link';
import Settings from '../../screens/settings/Settings';
import CustomDrawerContent from '../../components/customDrawer/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name='Dashboard' component={HomeScreen} />
            <Drawer.Screen name='Links' component={Link} />
            <Drawer.Screen name='Settings' component={Settings} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator