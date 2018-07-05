import React from 'react';
import { Button, Text, Image } from 'react-native';
import styled from 'styled-components';
import { Subject, timer } from 'rxjs';
import { exhaustMap, map, takeUntil, groupBy, mergeMap, finalize } from 'rxjs/operators';
import donut from './donut.png';
import kenwheeler from './ken_wheeler.png';
import { webSocket } from 'rxjs/webSocket';
import { Subscription } from 'rxjs';

const sourceImages = [kenwheeler, donut];

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

  _socket = webSocket('ws://localhost:8080');

  state = { locationX: 0, locationY: 0, pageX: 0, pageY: 0, randomDonuts: [] };
  
  _subscription = new Subscription();

  _donutMap = new Map();

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
    }));

    this._subscription.add(
      this._socket.pipe(
        groupBy(data => data.id),
        mergeMap(singleDonutStream => 
          singleDonutStream.pipe(
            takeUntil(
              timer(3000),
            ),
            finalize(() => {
              const dataId = singleDonutStream.key;
              this._donutMap.delete(dataId);
            })
          )
        )
      )
      .subscribe(data => {
        this._donutMap.set(data.id, data);
        this.setState({ randomDonuts: Array.from(this._donutMap.values()) });
      })
    );
  }

  componentWillUnmount() {
    this._subscription.unsubscribe();
  }

  _sendDonutStream() {
    this._socket.next(JSON.stringify({
      type: 'sub'
    }));
  }

  render() {
    let donutX = 0;
    let donutY = 0;

    const { pageX, pageY, locationX, locationY, randomDonutX, randomDonutY } = this.state;

    donutX = pageX - locationX;
    donutY = pageY - locationY - 80;

    return (
      <HomeView>
        {/* <Text>{ JSON.stringify({ pageX, pageY, locationX, locationY, randomDonutX, randomDonutY }) }</Text> */}
        {this.state.randomDonuts.map((randomDonut, i) => <Image 
          key={i}
          source={sourceImages[0]}
          style={{
            position: 'absolute',
            left: randomDonut.x,
            top: randomDonut.y,
          }}>
        </Image>)}
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
        <Button 
          onPress={() => this._sendDonutStream()}
          title="add"
          ></Button>
      </HomeView>
    );
  }
}

const HomeView = styled.View`
  flex: 1;
  justify-content: center;
`;