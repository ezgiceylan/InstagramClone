import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import data from '../../storage/database/post';

import styles from './HomeComponents.style';

const Stories = () => {
  const navigation = useNavigation();

  const openCamera = React.useCallback(async () => {
    await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
  }, []);

  return (
    <View style={styles.topContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((data, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              key={index}
              onPress={() => {
                data.id === 1
                  ? openCamera()
                  : navigation.navigate({
                      name: 'Story',
                      params: {
                        image: data.postImage,
                        name: data.name,
                        pp: data.image,
                        timeStory: data.timeStory,
                      },
                    });
              }}>
              <View style={styles.top2}>
                {data.id === 1 ? (
                  <View style={styles.myStory}>
                    <View style={styles.plusIcon}>
                      <AntDesign name="pluscircle" size={16} color="#0195f7" />
                    </View>
                    <Image source={data.image} style={styles.image2} />
                  </View>
                ) : (
                  <View style={styles.circle}>
                    <Image source={data.image} style={styles.image2} />
                  </View>
                )}

                <Text style={styles.textLabel}>{data.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Stories;
