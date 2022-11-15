import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import Container from '../../components/Container/Container';
import notification from '../../storage/database/notification';

import styles from './Notification.style';
const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={32} color="white" />
      </TouchableWithoutFeedback>
      <Text style={styles.headerText}>Bildirimler</Text>
    </View>
  );
};

const Notification = () => {
  const [follow, setFollow] = useState([]);

  const checkFollow = React.useCallback((currentFollow, user) => {
    return currentFollow.find(item => item === user);
  }, []);

  const handleFlowPress = React.useCallback(
    user => {
      setFollow(currentFollow => {
        const isFollowed = checkFollow(currentFollow, user);

        if (isFollowed) {
          return currentFollow.filter(item => item !== user);
        }

        return [...currentFollow, user];
      });
    },
    [checkFollow],
  );

  return (
    <Container insets={{top: true}}>
      <Header />
      <ScrollView>
        <View>
          <Text style={styles.time}>Bu hafta</Text>
        </View>
        <View>
          {notification.map((data, index) => {
            return (
              <View key={index}>
                <View style={styles.container}>
                  <View>
                    <Image style={styles.image} source={data.image} />
                  </View>

                  <View
                    style={{
                      width: '46%',
                      marginLeft: 15,
                    }}>
                    <Text style={styles.user}>
                      {data.user}{' '}
                      <Text style={styles.message}>{data.message}</Text>
                    </Text>
                  </View>

                  <View style={{alignContent: 'center'}}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{
                        borderRadius: 10,
                        width: 120,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: checkFollow(follow, data.user)
                          ? '#262626'
                          : '#0098fd',
                        marginLeft: 10,
                      }}
                      onPress={() => handleFlowPress(data.user)}>
                      {checkFollow(follow, data.user) ? (
                        <Text style={styles.butonText}>Takiptesin</Text>
                      ) : (
                        <Text style={styles.butonText}>Takip Et</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
          <View style={styles.line} />
          <Text style={styles.time}>Bu ay</Text>
        </View>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.image}
              source={require('../../storage/images/tag2.jpg')}
            />
            <View style={{marginLeft: 15}}>
              <Text style={styles.user}>
                gozde <Text style={styles.message}>hikayeni beğendi · 3h</Text>
              </Text>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.story}
              source={require('../../storage/images/profil.jpg')}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Notification;
