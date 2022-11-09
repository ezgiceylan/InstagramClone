import React, {useEffect, useState} from 'react';
import {Animated, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Container from '../Container/Container';

const Status = () => {
  const navigation = useNavigation();
  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 3000);

    Animated.timing(progress, {
      toValue: 3,
      duration: 7000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, [navigation, progress]);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <Container>
      <View
        style={{
          height: 4,
          borderRadius: 10,
          width: '100%',
          borderWidth: 1,
          backgroundColor: 'gray',
          marginTop: 10,
          position: 'absolute',
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}
        />
      </View>
    </Container>
  );
};

export default Status;
