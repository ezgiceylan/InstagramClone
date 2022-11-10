import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '../../components/Container/Container';

import styles from './styles';
const SingleMessage = ({route, navigation}) => {
  return (
    <Container insets={{bottom: true, top: true}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.topMessage}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={32} color="white" />
          </TouchableWithoutFeedback>
          <Image source={route.params.image} style={styles.imageUser} />
          <View style={{marginLeft: 15}}>
            <Text style={styles.name}>{route.params.name}</Text>
            <Text style={styles.messageUser}>{route.params.username}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Ionicons
            name="call-outline"
            size={26}
            color="white"
            style={{marginRight: 25}}
          />
          <AntDesign name="videocamera" size={26} color="white" />
        </View>
      </View>
    </Container>
  );
};

export default SingleMessage;
