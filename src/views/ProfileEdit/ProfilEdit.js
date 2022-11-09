import React, {useRef, useState} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import DefaultImage from '../../../assets/images/profil.jpg';

import styles from './ProfilEdit.style';

const ProfilEdit = () => {
  const [name, setName] = useState('CEYLAN');
  const [bio, setBio] = useState('Marmara Üniversitesi');
  const [image, setImage] = useState();
  const navigation = useNavigation();
  const bottomSheet = useRef();

  const chooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then(images => {
      setImage(images?.path);
      console.log(image);
    });
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={{margin: 10}}>
        <View style={styles.topContainer}>
          <View style={styles.left}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="close"
                size={32}
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.label}>Profili Düzenle</Text>
          </View>

          <View style={styles.right}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: 'Account',
                  params: {
                    name: name,
                    bio: bio,
                  },
                })
              }>
              <AntDesign name="check" size={32} color="#0098fd" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={image ? {uri: image} : DefaultImage}
          />

          <TouchableOpacity onPress={() => bottomSheet.current.show()}>
            <Text style={styles.change}> Profil fotoğrafını değiştir</Text>
          </TouchableOpacity>

          <BottomSheet
            hasDraggableIcon
            ref={bottomSheet}
            height={350}
            sheetBackgroundColor="#262626">
            <View style={{marginLeft: 10}}>
              <View style={{marginTop: 25, marginBottom: 15}}>
                <Text style={styles.sheetText}>
                  Profil fotoğrafını değiştir
                </Text>
              </View>

              <View style={styles.lineGrey} />

              <TouchableOpacity
                style={{marginVertical: 20}}
                onPress={chooseFromLibrary}>
                <Text style={styles.sheetText}>Yeni Profil Fotoğrafı</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginVertical: 15}}
                onPress={() => {
                  Linking.openURL('https://www.facebook.com/login/');
                }}>
                <Text style={styles.sheetText}>Facebook'tan aktar</Text>
              </TouchableOpacity>
              <View style={{marginVertical: 15}}>
                <Text style={styles.sheetText}>Avatar kullan</Text>
              </View>
              <View style={{marginVertical: 15}}>
                <Text
                  style={{color: '#be363f', fontWeight: '500', fontSize: 18}}>
                  Profil fotoğrafını kaldır
                </Text>
              </View>
            </View>
          </BottomSheet>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Ad</Text>
          <TextInput style={styles.input} onChangeText={item => setName(item)}>
            {name}
          </TextInput>
          <View style={styles.line} />
          <Text style={styles.inputLabel}>Kullanıcı adı</Text>
          <Text style={styles.input}>ezgiceylan</Text>
          <View style={styles.line} />
          <Text style={styles.inputLabel}>Biyografi</Text>
          <TextInput style={styles.input} onChangeText={item => setBio(item)}>
            {bio}
          </TextInput>
          <View style={styles.line} />
        </View>

        <Text
          style={{
            color: 'white',
            marginTop: 15,
            fontSize: 19,
          }}>
          Bağlantı ekle
        </Text>

        <View style={styles.blueContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OnboardingScreen')}>
            <Text style={styles.blueText}>Profesyonel Hesaba Geçiş Yap</Text>
          </TouchableOpacity>
          <Text style={styles.blueText}>Avatarı Düzenle</Text>

          <Text style={styles.blueText}>Kişisel bilgi ayarları</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilEdit;
