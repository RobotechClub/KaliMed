import React from 'react';
import { Text, View } from 'react-native';

export default class DetailsHeader extends React.Component {

    render() {
        return (
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <View style={{
                        backgroundColor: '#00bcd4', width: '100%', height: 60, alignItems: "center",

                    }}>
                        <Text style={{ fontSize: 24, color: 'white', marginTop: 10 }}>Cardiology</Text>
                    </View>
                </View>

            </View>
        );
    }

}
