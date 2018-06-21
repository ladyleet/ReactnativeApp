import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <HomeView>
        <Button 
          title="👀 🦄 🌈 (👆 me)"
          onPress={() => this.props.navigation.navigate('Red')}
        />
      </HomeView>
    );
  }
}

const HomeView = styled.View`
  background: #FBAED2;
  flex: 1;
  justify-content: center;
`;