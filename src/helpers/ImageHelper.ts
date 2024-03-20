// ImageHelper.ts

import {
  Image,
  ImageResolvedAssetSource,
  ImageSourcePropType,
} from 'react-native';

const professions = [
  'doctor',
  'teacher',
  'engineer',
  'lawyer',
  'dentist',
  'pilot',
  'nurse',
  'chef',
  'police',
  'firefighter',
  'soldier',
  'farmer',
  'scientist',
  'artist',
  'writer',
  'musician',
  'actor',
  'athlete',
  'architect',
  'designer',
  'journalist',
  'photographer',
  'psychologist',
  'veterinarian',
  'astronaut',
];

const getRandomProfession = (): string => {
  return professions[Math.floor(Math.random() * professions.length)];
};

const getImageForProfession = async (
  profession: string,
): Promise<ImageResolvedAssetSource> => {
  const name = (100000 + Math.floor(Math.random() * 25)).toString();
  const image = `../assets/images/${profession}/${name}.png`;

  return Image.resolveAssetSource(require(image) as ImageSourcePropType);
};

const getProfessionButtons = (rightProfession: string): string[] => {
  const Professions = [rightProfession];

  while (Professions.length < 4) {
    const randomProfession = getRandomProfession();
    if (!Professions.includes(randomProfession)) {
      Professions.push(randomProfession);
    }
  }

  Professions.sort(() => Math.random() - 0.5);

  return Professions;
};

export {getRandomProfession, getImageForProfession, getProfessionButtons};
