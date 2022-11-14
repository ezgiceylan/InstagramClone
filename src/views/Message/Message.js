import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import message from '../../storage/database/message';

import styles from './styles';

const Message = ({navigation}) => {
  return (
    <Container insets={{bottom: true, top: true}}>
      <View style={styles.back}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={32} color="white" />
          </TouchableWithoutFeedback>
          <Text style={styles.userName}>ezgiceylan</Text>
        </View>
        <Feather
          name="edit"
          size={24}
          color="white"
          style={{marginRight: 20}}
        />
      </View>

      <ScrollView>
        <View style={{marginTop: 10}}>
          <SearchBar />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mesajlar</Text>
          <Text style={styles.title2}>İstekler</Text>
        </View>

        <View>
          {message.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate({
                    name: 'SingleMessage',
                    params: {
                      image: data.image,
                      name: data.user,
                      username: data.username,
                    },
                  });
                }}>
                <View style={styles.messageContainer}>
                  <Image style={styles.image} source={data.image} />
                  <View style={{marginLeft: 10}}>
                    <Text style={styles.user}>{data.user}</Text>
                    <Text style={{fontSize: 1}}>{data.username}</Text>
                    <Text style={styles.message}>{data.message}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </Container>
  );
};

export default Message;
