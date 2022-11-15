import React from 'react';
import {Image, View} from 'react-native';

import styles from './Tag.style';

const Tag = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../storage/images/tag1.jpg')}
      />
      <Image
        style={styles.image}
        source={require('../../storage/images/tag2.jpg')}
      />
    </View>
  );
};

export default Tag;
