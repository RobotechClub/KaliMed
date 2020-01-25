//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import NavigationDrawerHeader from './NavigationDrawerHeader';

export default class CustomSideBarMenu extends Component {
    constructor() {
        super();
        this.items = ["Cardiology", "Endocrinology", "Gastroenterology",
            "Hematology-oncology", " Muscoloskeletal System",
            "Neurology", "psychiatry", "Pulomonology", "Nephrology",
            "Reproductive System"
        ]
    }
    render() {
        return (
            <ScrollView style={{ width: '100%' }}>
                <View>
                    <NavigationDrawerHeader />
                    <View />
                    <Text style={{ marginTop: 20, marginRight: 2, marginLeft: 20, color: 'grey', fontSize: 18 }}>Systems</Text>
                    {this.items.map((item, key) => (
                        this.getRowItem(key, item, (key) => this.homePressAction(key))
                    ))}
                    {this.getSeparatorView()}
                    <Text style={{ marginTop: 20, marginRight: 2, marginLeft: 20, color: 'grey', fontSize: 18 }}>Notifications</Text>
                    {this.getRowItem(this.items.length + 1, "Term of the Day!", (key) => this.homePressAction(key))}
                    {this.getSeparatorView()}
                    <Text style={{ marginTop: 20, marginRight: 2, marginLeft: 20, color: 'grey', fontSize: 18 }}>Contact Us</Text>
                    {this.getRowItem(this.items.length + 2, "Send Email", (key) => this.homePressAction(key))}
                </View>
            </ScrollView>
        );
    }

    getSeparatorView() {
        return <View style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
        }} />;
    }

    getRowItem(key, item, homePressAction) {
        return <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
        }} key={key}>
            <View style={{ marginRight: 2, marginLeft: 20 }}>
            </View>
            <Text style={{
                fontSize: 15,
                color: global.currentScreenIndex === key ? '#00bcd4' : 'black',
            }} onPress={() => homePressAction(key)}>
                {item}
            </Text>
        </View>;
    }

    homePressAction(key) {
        global.currentScreenIndex = key;
        this.props.navigation.navigate('Home');
        this.props.navigation.closeDrawer();
    }
}
const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
});