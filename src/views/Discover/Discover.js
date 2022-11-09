import React from 'react';
import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Container from '../../components/Container/Container';
import Reels from '../../components/DiscoverComponents/Reels';

import styles from './Discover.style';

const Discover = () => {
  return (
    <Container insets={{top: true}}>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Reels />
        <View style={styles.container}>
          <Text style={styles.label}>Reels</Text>
          <Feather
            name="camera"
            color="white"
            size={28}
            style={{marginRight: 15}}
          />
        </View>
      </View>
    </Container>
  );
};

export default Discover;
