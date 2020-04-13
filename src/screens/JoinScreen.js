import React, { useState } from 'react';
import { Text, StyleSheet, Button } from 'react-native';

export default function JoinScreen({ setScreen, screens, roomId }) {

  function onBackPress() {
    // cleanup
    setScreen(screens.ROOM);
  }

  return (
    <>
      <Text style={styles.heading} >Join Screen</Text>
      <Text style={styles.heading} >Room : {roomId}</Text>
      <Button title="Back" onPress={onBackPress} />
    </>
  )
}

const styles = StyleSheet.create({
  heading: {
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 30,
  }
});
