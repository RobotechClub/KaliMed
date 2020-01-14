import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BookmarksDialog from '../main/BookmarksDialog';
import FloatingButton from '../main/FloatingButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => <Text onPress={() => this.props.navigation.navigate('Details')} style={styles.item}>{item.key}</Text>}
        />
        <FloatingButton/>
        <BookmarksDialog/>
        </View>

    );
  }
}

export default HomeScreen;