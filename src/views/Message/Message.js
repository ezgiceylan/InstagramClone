import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import SearchBar from '../../components/SearchBar/SearchBar';
import message from '../../storage/message';
import styles from './styles';
const Message = () => {
  return (
    <ScrollView style={styles.body}>
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
            <View key={index}>
              <View style={styles.messageContainer}>
                <Image style={styles.image} source={data.image} />
                <View style={{marginLeft: 10}}>
                  <Text style={styles.user}>{data.user}</Text>
                  <Text style={styles.message}>{data.message}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Message;
