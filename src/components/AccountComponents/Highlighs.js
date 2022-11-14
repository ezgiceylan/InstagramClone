import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Highlighs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate({
            name: 'Story',
            params: {
              image: require('../../storage/images/avatar.jpg'),
              name: 'Öne Çıkanlar',
              pp: require('../../storage/images/profil.jpg'),
              timeStory: '50h',
            },
          });
        }}>
        <Image
          source={require('../../storage/images/avatar.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>

      <Text style={styles.label}>Öne Çıkanlar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    marginBottom: 20,
  },
  container: {
    width: 75,
    height: 75,
    backgroundColor: 'black',
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: '#2E2E2E',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: 100,
    borderWidth: 0.8,
    borderColor: '#2E2E2E',
  },
  label: {
    color: 'white',
    marginTop: 5,
    marginLeft: 15,
  },
});
export default Highlighs;
