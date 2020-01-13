import React from 'react';
import { View, Image, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { DrawerItems } from 'react-navigation-drawer';
import SwitchButton from './SwitchButton';

export const NavigationDrawerHeader = (props) => (
    <View>
        <View>
            <Text> KaliMed </Text>
            <Image style={{width: 80, height: 80}}  source={require('../../../images/logo.png')} />

            <SearchBar
                placeholder="Type Here..."
                // onChangeText={this.updateSearch}
                // value={search}
            />

            <SwitchButton switchWidth={150} ></SwitchButton>
        </View>
        <DrawerItems {...props} />
    </View>
)

