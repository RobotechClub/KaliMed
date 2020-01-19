import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SwitchButton from './SwitchButton';

const styles = StyleSheet.create({
    mainText: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        paddingLeft: 10,
        paddingTop: 20

    },
    switchButton: {
        paddingLeft: 30,
        paddingTop: 10
    },

})

function NavigationDrawerHeader(props) {

    return (
        <View style={{ backgroundColor: '#00bcd4' }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.mainText}> KaliMed </Text>
                <View style={{ width: '55%' }}>
                    <SearchBar
                        round={true}
                        lightTheme={true}
                        containerStyle={{
                            backgroundColor: '#00bcd4',
                            borderWidth: 0, //no effect
                            shadowColor: 'white', //no effect
                            borderBottomColor: 'transparent',
                            borderTopColor: 'transparent'
                        }}
                        inputContainerStyle={{
                            backgroundColor: '#00bcd4',
                            borderWidth: 3,
                            borderColor: 'yellow',
                            borderBottomColor: 'yellow',
                            borderBottomWidth: 3,
                            borderTopColor: 'yellow',
                            borderTopWidth: 3,

                        }}
                        placeholder="Search"
                        onChangeText={(e) => console.log(e)}
                        value={''}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 80, height: 70, marginLeft: 10, marginBottom: 10 }} source={require('../../../images/logo.jpg')} />
                <View style={styles.switchButton}>
                    <SwitchButton switchWidth={150} ></SwitchButton>
                </View>

            </View>
        </View>
    );
}

export default NavigationDrawerHeader