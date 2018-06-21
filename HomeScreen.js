import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';
import { fromEvent } from 'rxjs';
import { stream } from './utils/stream';
import donut from './donut.png';

export default class HomeScreen extends React.Component {
  
  touchDown$ = fromEvent(document, '')
  
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