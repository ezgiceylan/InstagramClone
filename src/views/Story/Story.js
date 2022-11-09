import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Container from '../../components/Container/Container';
import Status from '../../components/Status/Status';

import styles from './Story.styles';
const Story = ({route}) => {
  return (
    <Container insets={{bottom: true}}>
      <Status />
      <View style={styles.top}>
        <Image style={styles.profil} source={route.params.pp} />
        <Text style={styles.user}>{route.params.name}</Text>
        <Text style={styles.time}>{route.params.timeStory}</Text>
      </View>

      <Image style={styles.image} source={route.params.image} />
      <View style={styles.footer}>
        <TextInput
          placeholder="Mesaj Gönder"
          placeholderTextColor="white"
          style={styles.input}
        />
        <View style={styles.ıcon}>
          <Icon name="heart" size={24} color="white" />
        </View>
      </View>
    </Container>
  );
};

export default Story;
