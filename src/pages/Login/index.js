import React, {useState} from 'react';
import {StyleSheet, Text, Button, View, Image} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {MyInput, MyGap, MyButton} from '../../components';
import LottieView from 'lottie-react-native';

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);

  const masuk = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.replace('MainApp');
    }, 1500);
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      {loading == true ? (
        <LottieView
          source={require('../../assets/animation.json')}
          autoPlay
          loop
        />
      ) : (
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
          <MyInput label="Email" iconname="mail" />
          <MyGap jarak={20} />
          <MyInput label="Password" iconname="key" />
          <MyGap jarak={40} />
          <MyButton
            warna={colors.primary}
            title="MASUK"
            Icons="log-in"
            onPress={masuk}
          />
        </View>
      )}
    </View>
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
