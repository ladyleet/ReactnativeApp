import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Red from './Red';
import Yellow from './Yellow';
import Green from './Green';
import Blue from './Blue';
import Purple from './Purple';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Red: Red,
  Yellow: Yellow,
  Green: Green,
  Blue: Blue,
  Purple: Purple
},
{
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
};

