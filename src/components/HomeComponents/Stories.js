import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import data from '../../storage/data';

import styles from './HomeComponents.style';

const Stories = () => {
  const navigation = useNavigation();
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
                  ? null
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
                <View style={styles.circle}>
                  <Image source={data.image} style={styles.image2} />
                </View>

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
