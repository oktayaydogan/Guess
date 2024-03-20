// StartScreen.tsx

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';

let highScore = 0;

AsyncStorage.getItem('highScore').then(value => {
  if (value !== null) {
    highScore = parseInt(value, 10);
  }
});

const StartScreen = ({navigation}: any): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Tahmin Et!</Text>
      <Button title="Başla" onPress={() => navigation.navigate('GameScreen')} />
      <Text style={styles.highScore}>En Yüksek: {highScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '90%',
    height: '50%',
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: -100,
  },
  button: {
    backgroundColor: '#ebb345',
    padding: 10,
    borderRadius: 10,
    color: 'black',
    alignSelf: 'center',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  highScore: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 18,
  },
});

export default StartScreen;
