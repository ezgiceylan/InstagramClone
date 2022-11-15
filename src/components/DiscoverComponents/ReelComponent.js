import React, {useRef, useState} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import styles from './DiscoverComponents.style';

const Reel = ({item}) => {
  const ref = useRef(null);

  const bottomTabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  const height =
    Dimensions.get('window').height - bottomTabBarHeight - insets.top;

  return (
    <View
      style={{
        height: height,
        justifyContent: 'flex-end',
      }}>
      <Video
        videoRef={ref}
        source={item.video}
        resizeMode="cover"
        repeat={true}
        style={{...styles.video, height: height}}
        muted={true}
      />

      <View
        style={{
          zIndex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 10,
        }}>
        <Left item={item} />
        <Right item={item} />
      </View>
    </View>
  );
};
const Right = ({item}) => {
  const [like, setLike] = useState(item.islike);

  return (
    <View style={styles.right}>
      <TouchableOpacity onPress={() => setLike(!like)}>
        <AntDesign
          name={like ? 'heart' : 'hearto'}
          size={28}
          color={like ? 'red' : 'white'}
        />
      </TouchableOpacity>
      <Text style={styles.number}>{like ? item.likes + 1 : item.likes}</Text>
      <Ionicons name="chatbubble-outline" size={32} color="white" />
      <Text style={styles.number}>{item.comment}</Text>
      <Feather name="send" size={28} color="white" style={styles.icons} />
      <Entypo
        name="dots-three-vertical"
        size={20}
        color="white"
        style={styles.icons}
      />
      <Image source={item.image} style={styles.imageBottom} />
    </View>
  );
};

const Left = ({item}) => {
  const [follow, setFollow] = useState(item.follow);
  return (
    <View style={{zIndex: 1, justifyContent: 'flex-end'}}>
      <View style={styles.footer}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.user}>{item.user}</Text>
        <TouchableOpacity
          onPress={() => setFollow(!follow)}
          style={{
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            width: follow ? 90 : 70,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <Text style={styles.buttonText}>
            {follow ? 'Takip Et ' : 'Takip'}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.explanation}>{item.explanation}</Text>
      </View>
      <View style={styles.sound}>
        <AnimatedLottieView
          source={require('../../../assets/images/sound.json')}
          autoPlay
          style={{width: 24, height: 24}}
        />
        <Text style={styles.soundText}>{item.user}</Text>
        <Entypo name="dot-single" size={15} color="white" />
        <Text style={styles.soundText}>Orjinal Ses İçeriği</Text>
      </View>
    </View>
  );
};
export default Reel;
