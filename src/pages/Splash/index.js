import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

export default function Splash({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const bottom = new Animated.Value(windowWidth);

  Animated.timing(bottom, {
    toValue: 0,
    duration: 1200,
    useNativeDriver: false,
  }).start();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 1500);
  });
  return (
    <SafeAreaView style={styles.page}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
          padding: 30,
        }}>
        <Animated.Image
          source={require('../../assets/logoputih.png')}
          style={{
            bottom: bottom,
            height: 160 / 2.5,
            width: 620 / 2.5,
          }}
        />
        <Text
          style={{
            marginTop: 20,
            fontFamily: fonts.secondary[400],
            fontSize: 22,
            color: colors.white,
          }}>
          Aplikasi Untuk Memudahkan Anda Dalam Mencari Informasi Seputar
          Pariwisata di Jawa Barat
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <Image
          resizeMode="contain"
          source={require('../../assets/building.png')}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  image: {
    // aspectRatio: 1,
  },
});
