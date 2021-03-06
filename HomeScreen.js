import React from 'react';
import { Button, Text, Image } from 'react-native';
import styled from 'styled-components';
import { Subject } from 'rxjs';
import { exhaustMap, map, takeUntil } from 'rxjs/operators';
import { stream } from './utils/stream';
import donut from './donut.png';
import { webSocket } from 'rxjs/webSocket';
import { Subscription } from 'rxjs';

/* <Button 
          title="👀 🦄 🌈 (👆 me)"
          onPress={() => this.props.navigation.navigate('Red')}
        />
      
        
        */
export default class HomeScreen extends React.Component {
  _onMoveShouldSetResponder (evt, gestureState) { return true; }
  _onMoveShouldSetResponderCapture (evt, gestureState) { return true; }
 
  _touchStart = new Subject();
  _touchMove = new Subject();
  _touchEnd = new Subject();

  _socket = webSocket('ws://websocket-server-bro.herokuapp.com:8080');

  state = { locationX: 0, locationY: 0, pageX: 0, pageY: 0, positions: [] };
  
  _subscription = new Subscription();

  componentDidMount() {
    this._subscription.add(this._touchStart.pipe(
      exhaustMap(start => {
        // because React reuses the event object, we need to capture these now.
        const locationX = start.nativeEvent.locationX;
        const locationY = start.nativeEvent.locationY;
        return this._touchMove.pipe(
          takeUntil(this._touchEnd),
          map(move => ({
            pageX: move.nativeEvent.pageX,
            pageY: move.nativeEvent.pageY,
            locationX,
            locationY,
          }))
        )
      })
    ).subscribe((state) => {
      this.setState(state);
      this._socket.next({
        type: 'UPDATE_POSITION',
        x: state.pageX,
        y: state.pageY,
      })
    }));

    this._subscription.add(this._socket.subscribe(positions => {
      this.setState({
        positions
      })
    }))
  }

  componentWillUnmount() {
    this._subscription.unsubscribe();
  }

  render() {
    let donutX = 0;
    let donutY = 0;

    const { pageX, pageY, locationX, locationY } = this.state;

    donutX = pageX - locationX;
    donutY = pageY - locationY - 80;

    return (
      <HomeView>
        <Text>{ JSON.stringify({ pageX, pageY, locationX, locationY }) }</Text>
        <Image
          onMoveShouldSetResponder={() => this._onMoveShouldSetResponder() } 
          onMoveShouldSetResponderCapture={() => this._onMoveShouldSetResponderCapture() }   
          onResponderGrant={(e) => this._touchStart.next(e) } 
          onResponderMove={(e) => this._touchMove.next(e) } 
          onResponderRelease={(e) => this._touchEnd.next(e) }
          
          style={{
            position: 'absolute',
            left: donutX,
            top: donutY,
          }} source={donut}>
        </Image>
        {this.state.positions.map(p => (<Image source={donut}
          style={{
            opacity: 0.8,
            position: 'absolute',
            left: p.x,
            top: p.y,
          }}>
        </Image>))}
      </HomeView>
    );
  }
}

const HomeView = styled.View`
  background: #FBAED2;
  flex: 1;
  justify-content: center;
`;