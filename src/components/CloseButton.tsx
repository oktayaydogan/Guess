// CloseButton.tsx

import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const CloseButton = ({onPress}: any): React.ReactElement => {
  return (
    <TouchableOpacity style={styles.closeButton} onPress={onPress}>
      <Text style={styles.closeButtonText}>x</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: '#000',
    position: 'absolute',
    padding: 10,
    borderRadius: 100,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
    right: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 2,
  },
});

export default CloseButton;
