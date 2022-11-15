import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import send from '../../storage/database/message';
import data from '../../storage/database/post';

import styles from './HomeComponents.style';

const Post = () => {
  const [like, setLike] = useState([]);
  const bottomSheet = useRef();

  const checkLike = React.useCallback((currentLike, postName) => {
    return currentLike.find(item => item === postName);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={item.image} style={styles.sheetImage} />
          <View>
            <Text style={styles.sheetLabel}>{item.user}</Text>
            <Text style={{color: '#a2a2a2'}}>{item.username}</Text>
          </View>
        </View>
      </View>
    );
  };
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
  const navigation = useNavigation();
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

              <TouchableOpacity style={{alignSelf: 'center', marginRight: 15}}>
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

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate({
                      name: 'Comment',
                      params: {
                        image: data.image,
                        user: data.postName,
                        explanation: data.explanation,
                      },
                    })
                  }>
                  <Feather name="message-circle" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => bottomSheet.current.show()}>
                  <Feather name="send" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <BottomSheet
                hasDraggableIcon
                ref={bottomSheet}
                height={400}
                sheetBackgroundColor="#262626">
                <View>
                  <View>
                    <TextInput
                      placeholder="Ara"
                      placeholderTextColor={'#a7a7a7'}
                      style={styles.input}
                    />
                    <Feather
                      name="search"
                      size={20}
                      color={'#4d4d4d'}
                      style={{
                        position: 'absolute',
                        margin: 15,
                        paddingLeft: 10,
                      }}
                    />
                  </View>
                  <View>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          style={styles.sheetImage}
                          source={require('../../../assets/images/profil.jpg')}
                        />
                        <Text style={styles.sheetLabel}>
                          Hikayene gönderi ekle
                        </Text>
                      </View>
                      <View style={{justifyContent: 'center'}}>
                        <AntDesign
                          name="right"
                          size={18}
                          color="#a4a4a4"
                          style={{
                            margin: 10,
                            alignItems: 'center',
                            marginRight: 20,
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View>
                    <FlatList
                      data={send}
                      keyExtractor={item => item.id}
                      renderItem={renderItem}
                    />
                  </View>
                </View>
              </BottomSheet>
              <View style={{marginRight: 20}}>
                <FontAwesome name="bookmark-o" size={24} color="white" />
              </View>
            </View>

            <Text style={styles.likeText}>
              {checkLike(like, data.postName) ? data.like + 1 : data.like}{' '}
              beğenme
            </Text>

            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={styles.postName}>{data.postName}</Text>
              <Text style={{color: 'white', marginTop: 2}}>
                {' '}
                {data.explanation}
              </Text>
            </View>

            <Text style={styles.comment}>{data.comment}</Text>

            <View
              style={{
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center',
              }}>
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
