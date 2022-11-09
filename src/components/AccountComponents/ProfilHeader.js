import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.container3}>
      <View>
        <Image
          source={require('../../../assets/images/profil.jpg')}
          style={styles.image3}
        />
      </View>

      <View style={styles.numbers}>
        <View style={styles.left}>
          <Text style={styles.numberContainer}>2</Text>
          <Text style={styles.text}>Gönderi</Text>
        </View>

        <View style={styles.mid}>
          <Text style={styles.numberContainer}>404</Text>
          <Text style={styles.text}>Takipçi</Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.numberContainer}>387</Text>
          <Text style={styles.text}>Takip</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  image3: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginLeft: 5,
  },
  numbers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '73%',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  numberContainer: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 5,
  },

  text: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  },
});
export default ProfileHeader;
