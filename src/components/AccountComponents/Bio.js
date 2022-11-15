import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './AccountComponents.style';

const Bio = ({route}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.bioContainer}>
        <Text style={styles.userName}> {route ? route.name : 'CEYLAN'}</Text>
        <Text style={styles.bio}>
          {route ? route.bio : 'Marmara Üniversitesi'}
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={styles.edit}
          onPress={() => navigation.navigate('EditProfile')}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.editText}>Profili Düzenle</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.icon}>
          <Image
            source={require('../../../assets/images/invite.png')}
            style={{width: 16, height: 16}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bio;
