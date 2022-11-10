import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import setting from '../../storage/database/setting';

import styles from './Setting.style';
const SettingComponent = () => {
  return (
    <View>
      {setting.map((data, index) => {
        return (
          <View key={index} style={styles.container}>
            <Image source={data.icon} style={styles.icon} />
            <Text style={styles.iconText}>{data.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const Settings = () => {
  const navigation = useNavigation();
  return (
    <Container insets={{top: true}}>
      <View style={styles.topHeader}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={32} color="white" />
        </TouchableWithoutFeedback>
        <Text style={styles.headerText}>Ayarlar</Text>
      </View>
      <SearchBar />
      <ScrollView>
        <SettingComponent />

        <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 5}}>
          <Image
            source={require('../../storage/images/meta.png')}
            style={{marginLeft: 10, width: 20, height: 20}}
          />
          <Text style={{color: 'white', fontSize: 18, marginLeft: 5}}>
            Meta
          </Text>
        </View>
        <Text
          style={{
            color: '#0098fd',
            fontSize: 18,
            margin: 10,
            marginBottom: 15,
            fontWeight: '500',
          }}>
          Hesaplar Merkezi
        </Text>

        <Text style={styles.p}>
          Hikaye ve gönderi paylaşımı ve giriş yapma dahil
        </Text>
        <Text style={styles.p}>Instagram,Facebook uygulaması ve Messenger</Text>
        <Text style={styles.p}>
          arasındaki bağlantılı deneyimler için ayarları kontrol et.
        </Text>
        <View style={{marginTop: 30}}>
          <Text style={styles.entry}>Girişler</Text>
          <Text style={styles.blueText}>Hesap Ekle veya Değiştir</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.blueText}>ezgiceylan'dan Çıkış Yap</Text>
          </TouchableWithoutFeedback>
          <Text style={styles.blueText}>Tüm Hesaplardan Çıkış Yap</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Settings;
