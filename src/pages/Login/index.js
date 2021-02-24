import React from 'react';
import {StyleSheet, Text, Button, View, Image} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {MyInput, MyGap, MyButton} from '../../components';

export default function Login({navigation}) {
  return (
    <View style={styles.page}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
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
      <MyButton warna={colors.primary} title="MASUK" Icons="log-in" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  image: {
    width: 620 / 2,
    height: 160 / 2,
  },
});
