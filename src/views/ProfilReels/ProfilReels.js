import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './ProfilReels.style';
const ProfilReels = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image
          source={require('../../storage/images/reels.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.play}>
        <Image
          style={styles.icon}
          source={require('../../../assets/images/play-button.png')}
        />
        <Text style={styles.number}>691</Text>
      </View>
    </View>
  );
};

export default ProfilReels;
