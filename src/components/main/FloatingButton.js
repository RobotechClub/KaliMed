import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function FloatingButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.fab}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        height: 50,
        width: 50,
        borderRadius: 200,
        position: 'absolute',
        bottom: 50,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#686cc3',
    },
    text: {
        fontSize: 30,
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});