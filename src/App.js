import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, RecyclerViewBackedScrollView } from 'react-native';
import RoomScreen from './screens/RoomScreen';
import CallScreen from './screens/CallScreen';
import JoinScreen from './screens/JoinScreen';

export default function App() {
  const screens = {
    ROOM: 'JOIN_ROOM',
    CALL: 'CALL',
    JOIN: 'JOIN',
  }

  const [screen, setScreen] = useState(screens.ROOM);
  const [roomId, setRoomId] = useState('');

  let content;

  switch (screen) {
    case screens.ROOM:
      content = <RoomScreen roomId={roomId} setRoomId={setRoomId} screens={screens} setScreen={setScreen} />
      break;

    case screens.CALL:
      content = <CallScreen roomId={roomId} screens={screens} setScreen={setScreen} />
      break;

    case screens.JOIN:
      content = <JoinScreen roomId={roomId} screens={screens} setScreen={setScreen} />
      break;

    default:
      content = <Text>Wrong Screen</Text>
  }

  return (
    <SafeAreaView style={styles.container} >
      {content}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
