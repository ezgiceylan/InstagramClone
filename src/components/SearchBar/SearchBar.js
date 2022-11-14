import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import styles from './SearchBar.style';
const SearchBar = ({ıconColor, placeHolders}) => {
  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder={placeHolders ? 'Arama' : 'Ara'}
          placeholderTextColor="grey"
          style={styles.input}
        />

        {ıconColor ? (
          <Feather name="search" size={20} color="white" style={styles.icon} />
        ) : (
          <Feather name="search" size={20} color="grey" style={styles.icon} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;
