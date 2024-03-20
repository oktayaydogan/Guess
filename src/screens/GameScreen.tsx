// GameScreen.tsx

import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  getProfessionButtons,
  getImageForProfession,
  getRandomProfession,
} from '../helpers/ImageHelper';
import Button from '../components/Button';
import CloseButton from '../components/CloseButton';

const GameScreen = ({navigation}: any): React.ReactElement => {
  const [score, setScore] = useState(0);
  const [imageSource, setImageSource] = useState<any>();
  const [buttons, setButtons] = useState<string[]>([]);

  useEffect(() => {
    const fetchImage = async () => {
      const randomProfession = getRandomProfession();
      const Buttons = getProfessionButtons(randomProfession);
      const source = await getImageForProfession(randomProfession);

      setButtons(Buttons);
      setImageSource(source);
    };

    fetchImage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Skor: {score}</Text>
      <Text style={styles.title}>Hangi Meslek?</Text>
      {buttons.map((button, index) => (
        <Button
          key={index}
          title={button}
          onPress={() => {
            setScore(score + 1);
          }}
        />
      ))}
      <Image source={imageSource} style={styles.image} />
      <CloseButton onPress={() => navigation.navigate('StartScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  score: {
    fontSize: 20,
    marginTop: 32,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default GameScreen;
