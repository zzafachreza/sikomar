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
import {color} from 'react-native-reanimated';
import {getData} from '../../utils/localStorage';

export default function Splash({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const bottom = new Animated.Value(windowWidth);
  const opacity = new Animated.Value(0);
  const bottomImage = new Animated.Value(-windowWidth);
  const bottomSun = new Animated.Value(-windowWidth);

  Animated.timing(bottom, {
    toValue: 0,
    duration: 1200,
    useNativeDriver: false,
  }).start();

  Animated.timing(opacity, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: false,
  }).start();

  Animated.timing(bottomImage, {
    toValue: 0,
    duration: 1300,
    useNativeDriver: false,
  }).start();

  Animated.timing(bottomSun, {
    toValue: 0,
    duration: 1300,
    useNativeDriver: false,
  }).start();

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iPhone: ' + response);
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Android: ' + response);
    }
  };

  useEffect(() => {
    requestLocationPermission();
    const unsubscribe = getData('user').then((res) => {
      console.log(res);
      if (!res) {
        // console.log('beum login');

        setTimeout(() => {
          navigation.replace('GetStarted');
        }, 2000);
      } else {
        // console.log('sudah login logon');

        setTimeout(() => {
          navigation.replace('MainApp');
        }, 2000);
      }
    });
  }, []);
  return (
    <SafeAreaView style={styles.page}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
          padding: 30,
        }}>
        <Animated.Image
          source={require('../../assets/logooren.png')}
          style={{
            bottom: bottom,
            height: 196 / 2.5,
            width: 621 / 2.5,
          }}
        />
        <Animated.Text
          style={{
            marginTop: 20,
            fontFamily: fonts.secondary[400],
            fontSize: 22,
            color: colors.primary,
            opacity: opacity,
          }}>
          Aplikasi Untuk Memudahkan Anda Dalam Mencari Informasi Seputar
          Industri Pariwisata di Jawa Barat
        </Animated.Text>
        <Animated.View
          style={{
            width: 80,
            borderRadius: 80 / 2,
            left: bottomSun,
            bottom: bottomImage,
            margin: 10,
            height: 80,
            backgroundColor: colors.secondary,
          }}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <Animated.Image
          resizeMode="contain"
          source={require('../../assets/building.png')}
          style={{
            marginBottom: bottomImage,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    // backgroundColor: colors.primary,
    flex: 1,
  },
  image: {
    // aspectRatio: 1,
  },
});
