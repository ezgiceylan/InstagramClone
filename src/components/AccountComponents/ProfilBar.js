import React, {useRef} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ProfilBar = () => {
  const bottomSheet = useRef();
  const bottomSheet2 = useRef();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.left}>
        <Feather name="lock" size={18} color="white" />
        <Text style={styles.header}>ezgiceylan</Text>
        <Image
          source={require('../../../assets/images/down.png')}
          style={{width: 18, height: 18}}
        />
      </View>

      <View style={styles.right}>
        <TouchableOpacity onPress={() => bottomSheet2.current.show()}>
          <FontAwesome
            name="plus-square-o"
            size={28}
            color="white"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <BottomSheet
          hasDraggableIcon
          ref={bottomSheet2}
          height={450}
          sheetBackgroundColor="#262626">
          <View style={{alignItems: 'center', marginTop: 15}}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Oluştur
            </Text>
          </View>
          <View style={styles.line} />

          <View style={{marginLeft: 15, marginTop: 15}}>
            <View style={styles.sheet2}>
              <Image source={require('../../../assets/images/video.png')} />
              <Text style={styles.label}>Reels Videosu</Text>
            </View>

            <View style={styles.sheet2}>
              <Image source={require('../../../assets/images/grid.png')} />
              <Text style={styles.label}>Gönderi</Text>
            </View>

            <View style={styles.sheet2}>
              <Image
                source={require('../../../assets/images/stories.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>Hikaye</Text>
            </View>
            <View style={styles.sheet2}>
              <Image
                source={require('../../../assets/images/highlight-story.png')}
                style={styles.icon}
              />
              <Text style={styles.label}> Öne Çıkan Hikaye</Text>
            </View>

            <View style={styles.sheet2}>
              <Image
                source={require('../../../assets/images/live.png')}
                style={styles.icon}
              />
              <Text style={styles.label}> Canlı</Text>
            </View>

            <View style={styles.sheet2}>
              <Image
                source={require('../../../assets/images/book.png')}
                style={styles.icon}
              />
              <Text style={styles.label}> Rehber</Text>
            </View>
          </View>
        </BottomSheet>

        <BottomSheet
          hasDraggableIcon
          ref={bottomSheet}
          height={400}
          sheetBackgroundColor="#262626">
          <View style={{marginTop: 15, marginLeft: 5}}>
            <TouchableOpacity
              style={styles.sheet}
              onPress={() => {
                navigation.navigate('Settings');
                bottomSheet.current.close();
              }}>
              <Ionicons name="settings-sharp" size={28} color="white" />
              <Text style={styles.label}>Ayarlar</Text>
            </TouchableOpacity>

            <View style={styles.sheet}>
              <Image
                source={require('../../../assets/images/timer.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>Hareketlerin</Text>
            </View>

            <View style={styles.sheet}>
              <Image
                source={require('../../../assets/images/time.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>Arşiv</Text>
            </View>

            <View style={styles.sheet}>
              <Image
                source={require('../../../assets/images/qr-code.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>QR Kodu</Text>
            </View>

            <View style={styles.sheet}>
              <Feather name="bookmark" size={28} color="white" />
              <Text style={styles.label}>Kaydedilenler</Text>
            </View>

            <View style={styles.sheet}>
              <AntDesign name="bars" size={28} color="white" />
              <Text style={styles.label}>Yakın Arkadaşlar</Text>
            </View>

            <View style={styles.sheet}>
              <Image
                source={require('../../../assets/images/heart.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>COVID-19 Bilgi Merkezi</Text>
            </View>
          </View>
        </BottomSheet>

        <TouchableOpacity onPress={() => bottomSheet.current.show()}>
          <FontAwesome name="bars" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '43%',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '25%',
    marginRight: 10,
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  icon: {
    width: 28,
    height: 28,
  },
  line: {
    borderBottomWidth: 0.8,
    borderBottomColor: '#3a3a3a',
    marginTop: 10,
  },
  sheet: {
    backgroundColor: '#262626',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sheet2: {
    backgroundColor: '#262626',
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 15,
  },
});
export default ProfilBar;
