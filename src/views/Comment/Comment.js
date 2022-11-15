import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '../../components/Container/Container';
import data from '../../storage/database/comment';

import styles from './Comment.style';
const Comment = ({navigation, route}) => {
  const [commentText, setCommentText] = useState('');

  return (
    <Container insets={{top: true, bottom: true}}>
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={styles.topContainer}>
          <View style={styles.top}>
            <View style={styles.left}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color="white" />
              </TouchableOpacity>
              <Text style={styles.label}> Yorumlar</Text>
            </View>

            <View style={{justifyContent: 'center', marginRight: 20}}>
              <Feather name="send" size={24} color="white" />
            </View>
          </View>

          <ScrollView>
            <View style={styles.topComment}>
              <Image style={styles.image} source={route.params.image} />
              <View style={{marginLeft: 10}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {route.params.user}
                </Text>
                <Text style={{color: 'white', marginTop: 7}}>
                  {route.params.explanation}
                </Text>
              </View>
            </View>

            <View style={styles.line} />
            {data.map((data, index) => {
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View style={styles.comment}>
                    <Image style={styles.images} source={data.image} />
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 13,
                        }}>
                        {data.user}
                      </Text>
                      <Text
                        style={{color: 'white', marginTop: 5, fontSize: 15}}>
                        {data.comment}
                      </Text>
                      <View style={{flexDirection: 'row', marginTop: 5}}>
                        <Text style={styles.answer}>Yanıtla</Text>
                        <Text style={styles.answer}>Gönder</Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      marginTop: 10,
                      alignItems: 'center',
                      marginRight: 20,
                    }}>
                    <EvilIcons name="heart" size={20} color="#aeaeae" />
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.bottom}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/profil.jpg')}
            />
            <TextInput
              placeholder="ezgiceylan olarak yorum yap.."
              placeholderTextColor={'#969696'}
              style={styles.input}
              value={commentText}
              onChangeText={setCommentText}
            />
          </View>

          <View>
            {!commentText.length ? (
              <Text style={{color: '#254253', marginRight: 15}}>Paylaş</Text>
            ) : (
              <Text style={{color: '#0096fd', marginRight: 15}}>Paylaş</Text>
            )}
          </View>
        </View>
      </View>
    </Container>
  );
};
export default Comment;
