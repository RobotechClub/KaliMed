import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import FloatingButton from '../main/FloatingButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
})
class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            headerTitleStyle: { alignSelf: 'center' },
            title: 'Center Title',
        };
    };

    render() {
        /* 2. Read the params from the navigation state */
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const otherParam = params ? params.otherParam : null;
        const deleteIcon = <Icon name="heart" type='font-awesome' color='#f50' size={25} raised />;

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column' }}>

                    <View style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: 10 }}>
                        <View style={{
                            backgroundColor: '#00bcd4', width: '90%', height: 190, alignItems: "center", borderWidth: 2,
                            borderStyle: "solid", borderRadius: 10, borderColor: "#D3D3D3",

                        }}>
                            <Text style={{ fontSize: 24, color: 'gray' }}>Term</Text>
                            <Text style={{ fontSize: 20, marginTop: 10 }}> aorta </Text>
                            <View style={{
                                marginTop: 10,
                                borderBottomColor: '#00008b',
                                borderBottomWidth: 3,
                                width: '80%'
                            }} />
                            <View style={{ marginTop: 20 }}>
                                <Icon name="heart" type='font-awesome' color='#f50' size={30} raised onPress={() => console.log('hello')} />
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: 10 }}>
                        <View style={{
                            backgroundColor: '#00bcd4', width: '90%', height: 120, alignItems: "center", borderWidth: 2,
                            borderStyle: "solid", borderRadius: 10, borderColor: "#D3D3D3",

                        }}>
                            <Text style={{ fontSize: 24, color: 'gray' }}>Arabic</Text>
                            <Text style={{ fontSize: 20, marginTop: 20 }}> الشريان اﻷبهر </Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: 10 }}>
                        <View style={{
                            backgroundColor: '#00bcd4', width: '90%', height: 120, alignItems: "center", borderWidth: 2,
                            borderStyle: "solid", borderRadius: 10, borderColor: "#D3D3D3",

                        }}>
                            <Text style={{ fontSize: 24, color: 'gray' }}>Lebanease</Text>
                            <Text style={{ fontSize: 20, marginTop: 20 }}> الشريان القلب اﻷساسي </Text>
                        </View>
                    </View>
                </View>
                <FloatingButton />
            </View>
        );
    }
}

export default DetailsScreen;