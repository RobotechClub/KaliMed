import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import ApplicationHeader from '../main/ApplicationHeader'
import DetailsHeader from '../main/DetailsHeader'
import DetailsScreen from '../screens/DetailsScreen'
import HomeScreen from '../screens/HomeScreen'
import CustomSideBarMenu from './CustomSideBarMenu'

const items = ["Cardiology", "Endocrinology", "Gastroenterology",
  "Hematology-oncology", " Muscoloskeletal System",
  "Neurology", "psychiatry", "Pulomonology", "Nephrology",
  "Reproductive System"
]
const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: () => <ApplicationHeader navigationProps={navigation} />,
    }),
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: ({ navigation }) => ({
      header: () => <DetailsHeader navigationProps={navigation} />,
    }),
  },
});


const getDrawerItems = () => {
  let array = {};
  items.forEach(item => {
    array = {
      ...array, [item]: {
        screen: HomeStackNavigator,
      }
    };
  })
  return array;
}

const NavigationDrawer = createDrawerNavigator(
  getDrawerItems(),
  {
    contentComponent: CustomSideBarMenu,
  })
  

export default createAppContainer(NavigationDrawer);