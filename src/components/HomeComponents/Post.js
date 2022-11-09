import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import data from '../../storage/data';

import styles from './HomeComponents.style';

const Post = () => {
  const [like, setLike] = useState([]);

  const checkLike = React.useCallback((currentLike, postName) => {
    return currentLike.find(item => item === postName);
  }, []);

  const handleFlowPress = React.useCallback(
    postName => {
      setLike(currentFollow => {
        const isFollowed = checkLike(currentFollow, postName);

        if (isFollowed) {
          return currentFollow.filter(item => item !== postName);
        }

        return [...currentFollow, postName];
      });
    },
    [checkLike],
  );

  return (
    <View style={styles.line}>
      {data.map((data, index) => {
        return (
          <View key={index} style={{marginBottom: 10}}>
            <View style={styles.top}>
              <View style={styles.topleft}>
                <Image source={data.image} style={styles.profilImage} />
                <Text style={styles.title}>{data.postName}</Text>
              </View>

              <TouchableOpacity style={{alignSelf: 'center', marginRight: 10}}>
                <Feather name="more-vertical" size={20} color="#F5F5F5" />
              </TouchableOpacity>
            </View>

            <View style={{height: 400}}>
              <Image source={data.postImage} style={styles.ımage} />
            </View>

            <View style={styles.ıconContainer}>
              <View style={styles.leftIcon}>
                <TouchableOpacity
                  onPress={() => handleFlowPress(data.postName)}>
                  <AntDesign
                    name={checkLike(like, data.postName) ? 'heart' : 'hearto'}
                    size={24}
                    color={checkLike(like, data.postName) ? 'red' : 'white'}
                  />
                </TouchableOpacity>

                <Feather name="message-circle" size={24} color="white" />
                <Feather name="send" size={24} color="white" />
              </View>

              <View style={{marginRight: 10}}>
                <FontAwesome name="bookmark-o" size={24} color="white" />
              </View>
            </View>

            <Text style={styles.likeText}>
              {checkLike(like, data.postName) ? data.like + 1 : data.like}{' '}
              beğenme
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.postName}>{data.postName}</Text>
              <Text style={{color: 'white', marginTop: 2}}>
                {' '}
                {data.explanation}
              </Text>
            </View>

            <Text style={styles.comment}>{data.comment}</Text>

            <View
              style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
              <Image
                source={require('../../../assets/images/profil.jpg')}
                style={styles.profilImage}
              />
              <Text style={{opacity: 0.8, color: 'grey'}}>Yorum ekle...</Text>
            </View>

            <Text style={styles.time}>{data.time}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
