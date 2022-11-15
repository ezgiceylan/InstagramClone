import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Container from '../../components/Container/Container';
import slides from '../../storage/database/slides';

import styles from './OnBoarding.style';
const {width, height} = Dimensions.get('window');

const Slide = ({item}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',

        width,
      }}>
      <View>
        {item.id === 1 ? (
          <Image
            source={item.image}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              resizeMode: 'cover',
            }}
          />
        ) : (
          <Image
            source={item.image}
            style={{
              height: 110,
              width: 130,
              resizeMode: 'cover',
            }}
          />
        )}
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <View>
        <Text style={styles.subtitle}>{item.description}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  const updateCurrentSlideIndex = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.2,
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: '#0195f7',
                },
              ]}
            />
          ))}
        </View>

        <View style={styles.line} />
        <View style={{marginBottom: 20}}>
          {currentSlideIndex === slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('CategoryScreen')}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
                  Devam
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <View />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: 'white',
                  }}>
                  Devam
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <Container insets={{top: true}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={32} color="white" style={styles.icon} />
      </TouchableOpacity>

      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </Container>
  );
};

export default OnboardingScreen;
