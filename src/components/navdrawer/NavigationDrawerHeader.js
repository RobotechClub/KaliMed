import React from 'react'
import { Text, View } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'

export const NavigationDrawerHeader = (props) => (
    <View>
        <View
            style={{
                backgroundColor: '#f50057',
                height: 140,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>
                Header
        </Text>
        </View>
        <DrawerItems {...props} />
    </View>
)