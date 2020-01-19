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
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: "#00bcd4",
    borderColor: "#D3D3D3",
    borderRadius: 10,
    padding: 20,
    fontSize: 18,
    marginLeft: 6,
    marginTop: 7,
    height: 60,
    width: "95%",
  },
  mainText: {
    fontSize: 25,
    textAlign: "center",
    color: "#00bcd4",
    fontStyle:"italic",
    fontWeight:"bold",

  },
  listContainer: {
    marginTop: 10
  }
})

class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}> Anatomy </Text>
        <View style={styles.listContainer}>
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
        </View>
        <FloatingButton />
        <BookmarksDialog />
      </View>

    );
  }
}

export default HomeScreen;