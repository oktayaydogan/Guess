// CloseButton.tsx

import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({title, onPress}: any): React.ReactElement => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ebb345',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Button;
