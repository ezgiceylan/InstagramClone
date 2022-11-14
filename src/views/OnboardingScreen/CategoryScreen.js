import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import category from '../../storage/database/category';

import styles from './CategoryScreen.style';
const CategoryScreen = ({navigation}) => {
  return (
    <Container insets={{top: true, bottom: true}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{marginTop: 5}}>
        <Ionicons name="chevron-back" size={28} color="white" />
      </TouchableOpacity>

      <View style={styles.topContainer}>
        <Text style={styles.label}>Seni En İyi Ne Tanımlar?</Text>
        <Text style={styles.labelText}>
          Kategoriler insanların seninki gibi hesapları bulmasına yardımcı
          olur.Bunu istediğin zaman değiştirebilirsin
        </Text>
      </View>

      <SearchBar />

      <Text style={styles.category}>Önerilenler</Text>
      <ScrollView>
        {category.map((item, index) => {
          const [circle, setCircle] = useState(item.isCircle);
          return (
            <View key={index}>
              <View style={styles.categoryContainer}>
                <Text style={styles.category}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => setCircle(!circle)}
                  activeOpacity={0.5}>
                  {circle ? (
                    <AntDesign
                      name="checkcircle"
                      size={28}
                      color="#0195f7"
                      style={styles.icon}
                    />
                  ) : (
                    <Entypo
                      name="circle"
                      size={28}
                      color="white"
                      style={styles.icon}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.line} />
      <View style={{height: 50}}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
            Bitti
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default CategoryScreen;
