import React from 'react';
import {StyleSheet, Text, Button, View, Image, ScrollView} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {MyInput, MyGap, MyButton} from '../../components';

export default function Register({navigation}) {
  return (
    <ScrollView style={styles.page}>
      {/* <Image
        source={require('../../assets/logooren.png')}
        style={styles.image}
      /> */}

      <MyGap jarak={20} />
      <MyInput label="Nama Lengkap" iconname="person" />
      <MyGap jarak={10} />
      <MyInput label="Email" iconname="mail" />
      <MyGap jarak={10} />
      <MyInput label="Alamat" iconname="map" />
      <MyGap jarak={10} />
      <MyInput label="Telepon" iconname="call" />
      <MyGap jarak={10} />
      <MyInput label="Password" iconname="key" />
      <MyGap jarak={40} />
      <MyButton warna={colors.secondary} title="MASUK" Icons="log-in" />
      <Text
        style={{
          marginTop: 20,
          fontFamily: fonts.secondary[500],
          fontSize: 16,
          color: colors.black,
          // maxWidth: 230,
        }}>
        Silahkan melakukan pendaftaran terlebih dahulu, sebelum masuk ke
        Aplikasi Sikomar Jabar
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  image: {
    width: 620 / 4,
    height: 160 / 4,
  },
});
