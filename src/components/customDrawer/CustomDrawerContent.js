import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
    return (
        <View style={styles.drawerContainer}>
            <View style={styles.profileHeader}>
                <View style={styles.profileHeaderPicCircle}>
                    <Text style={{ fontSize: 25, color: '#fff' }}>S</Text>
                </View>
                <Text style={styles.profileHeaderText}>Samad</Text>
            </View>
            <View style={styles.profileHeaderLine} />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContainer: {
        backgroundColor: '#0766ad',
        width: '100%',
        height: '100%',
        paddingTop: 40,
        color: 'white'
    },
    profileHeader: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        textAlign: 'center',
        padding: 15
    },
    profileHeaderPicCircle: {
        backgroundColor: '#0766ad',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileHeaderText: {
        color: '#0766ad',
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontWeight: 'bold'
    },
    profileHeaderLine: {
        backgroundColor: '#e2e2e2',
        height: 1,
        marginHorizontal: 20,
        marginTop: 15
    }
});

export default CustomDrawerContent;