import React, {useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Linking} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements';

import Container from '../../components/Container/Container';

import styles from './Login.styles';

const Login = ({navigation}) => {
  const trueEmail = 'E';
  const truePassword = '1';

  const [passwordVisible, setPasswordVisible] = useState(true);

  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      style={styles.body}
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container insets={{top: true, bottom: true}}>
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <View style={styles.topContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'white', opacity: 0.6, fontSize: 14}}>
                Türkçe(Türkiye)
              </Text>
              <Image
                source={require('../../../assets/images/down.png')}
                style={{width: 12, height: 12}}
              />
            </View>
            <Image
              style={styles.logo}
              source={require('../../../assets/images/instagram_text_logo.png')}
            />
          </View>

          <View style={styles.ınputsContainer}>
            <TextInput
              theme={{colors: {text: 'white'}}}
              placeholder="Telefon numarası,e-posta adresi veya kullanıcı adı"
              onChangeText={item => setName(item)}
              placeholderTextColor="grey"
              selectionColor="grey"
              style={styles.usernameInput}
              activeOutlineColor="grey"
              activeUnderlineColor="#3a3a3a"
            />

            <TextInput
              theme={{colors: {text: 'white'}}}
              placeholder="Şifre"
              placeholderTextColor="grey"
              onChangeText={itemP => setPassword(itemP)}
              style={styles.usernameInput}
              selectionColor="grey"
              secureTextEntry={passwordVisible}
              activeUnderlineColor="#3a3a3a"
              activeOutlineColor="#3a3a3a"
              right={
                <TextInput.Icon
                  color={'grey'}
                  name={passwordVisible ? 'eye-off' : 'eye'}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
            <TouchableOpacity
              onPress={() => {
                trueEmail === name && truePassword === password
                  ? navigation.reset({
                      index: 0,
                      routes: [{name: 'BottomTab'}],
                    })
                  : Alert.alert('Hatalı şifre veya kullanıcı adı');
              }}
              style={styles.login}
              disabled={name === null && password === null ? true : false}>
              <Text style={styles.loginText}>Giriş yap</Text>
            </TouchableOpacity>

            <View style={styles.text}>
              <Text style={{fontSize: 12, color: 'grey'}}>
                Giriş detaylarını mı unuttun?{' '}
              </Text>
              <Text style={styles.help}>Giriş yapmak için yardım al.</Text>
            </View>

            <View style={styles.seperatorStyle}>
              <View style={styles.seperator} />
              <Text style={{color: 'grey'}}> YA DA </Text>
              <View style={styles.seperator} />
            </View>

            <View style={styles.facebook}>
              <Image source={require('../../../assets/images/facebook.png')} />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://www.facebook.com/login/');
                }}>
                <Text style={styles.faceText}>Facebook ile Giriş Yap</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.bottom}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: 'grey'}}>
                  Hesabın yok mu?{' '}
                </Text>
                <Text style={styles.help}> Kaydol.</Text>
              </View>

              <View style={styles.line} />
            </View>
          </View>
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
};
export default Login;
