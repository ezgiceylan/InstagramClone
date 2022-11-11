import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Highlighs = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image
          source={require('../../storage/images/avatar.jpg')}
          style={styles.image}
        />
      </View>
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
