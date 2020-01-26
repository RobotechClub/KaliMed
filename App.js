import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import NavigationDrawer from './src/components/navdrawer/NavigationDrawer';
import { kalimedReducer } from './src/store/reducer/kalimedReducer';
import { MenuProvider } from 'react-native-popup-menu';

const store = createStore(kalimedReducer, applyMiddleware(thunk));
export default class App extends Component {

  render() {
    return (
      <MenuProvider>
        <Provider store={store}>
          <NavigationDrawer />
        </Provider>
      </MenuProvider>
    )
  }
}