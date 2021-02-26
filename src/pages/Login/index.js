import React, {useState} from 'react';
import {StyleSheet, Text, Button, View, Image, ScrollView} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {MyInput, MyGap, MyButton} from '../../components';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import {storeData} from '../../utils/localStorage';

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: null,
    password: null,
  });

  const masuk = () => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      axios.post('https://sikomarjabar.com/api/login.php', data).then((res) => {
        console.log(res);
        setLoading(false);
        storeData('user', res.data);
        navigation.replace('MainApp');
      });
    }, 1200);
  };
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View style={styles.page}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
          />

          <Text
            style={{
              marginTop: 20,
              fontFamily: fonts.secondary[400],
              fontSize: 30,
              color: colors.secondary,
              // maxWidth: 230,
            }}>
            Silahkan untuk masuk terlebih dahulu, ke Aplikasi Sikomar Jabar
          </Text>
          <MyGap jarak={20} />
          <MyInput
            label="Email"
            iconname="mail"
            value={data.nama_lengkap}
            onChangeText={(value) =>
              setData({
                ...data,
                email: value,
              })
            }
          />
          <MyGap jarak={20} />
          <MyInput
            label="Password"
            iconname="key"
            secureTextEntry
            onChangeText={(value) =>
              setData({
                ...data,
                password: value,
              })
            }
          />
          <MyGap jarak={40} />
          <MyButton
            warna={colors.primary}
            title="MASUK"
            Icons="log-in"
            onPress={masuk}
          />
        </View>
      </ScrollView>
      {loading && (
        <LottieView
          source={require('../../assets/animation.json')}
          autoPlay
          loop
          style={{backgroundColor: 'white'}}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  image: {
    width: 621 / 2,
    height: 196 / 2,
  },
});
