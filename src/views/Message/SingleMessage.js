import React, {useMemo, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Container from '../../components/Container/Container';

import styles from './styles';

const SingleMessage = ({route, navigation}) => {
  const [messageText, setMessageText] = useState('');

  return (
    <Container insets={{bottom: true, top: true}}>
      <View style={{justifyContent: 'space-between', flex: 1}}>
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

        <View style={styles.container}>
          <View style={styles.bluecircle}>
            <FontAwesome name="camera" size={24} color="white" />
          </View>
          <TextInput
            placeholder="Mesaj..."
            style={styles.input}
            placeholderTextColor={'#969696'}
            value={messageText}
            onChangeText={setMessageText}
          />

          {!messageText.length ? (
            <View style={{flexDirection: 'row'}}>
              <Feather name="mic" size={24} color="white" style={styles.icon} />
              <MaterialIcons
                name="photo"
                size={24}
                color="white"
                style={styles.icon}
              />
              <MaterialCommunityIcons
                name="sticker-emoji"
                size={24}
                color="white"
              />
            </View>
          ) : (
            <TouchableOpacity>
              <Text style={styles.send}>Gönder</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Container>
  );
};

export default SingleMessage;
