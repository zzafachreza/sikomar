import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import {MyButton, MyGap} from '../../components';
import {colors} from '../../utils/colors';
import {color} from 'react-native-reanimated';

export default function GetStarted({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const bottom = new Animated.Value(windowWidth);
  const w = new Animated.Value(0);
  const h = new Animated.Value(0);
  const top = new Animated.Value(0);

  Animated.timing(bottom, {
    toValue: 30,
    duration: 1200,
    useNativeDriver: false,
  }).start();

  Animated.timing(w, {
    toValue: 260,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  Animated.timing(h, {
    toValue: 225,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  Animated.timing(top, {
    toValue: 50,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  return (
    <View style={styles.page}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Image
          source={require('../../assets/logo.png')}
          style={{
            bottom: bottom,
            height: 196 / 3,
            width: 621 / 3,
          }}
        />

        <Animated.Image
          source={require('../../assets/logo2.png')}
          style={{
            height: h,
            width: w,
          }}
        />
      </View>

      <MyButton
        title="MASUK"
        Icons="log-in"
        warna={colors.primary}
        onPress={() => navigation.navigate('Login')}
      />

      <MyGap jarak={20} />
      <MyButton
        title="DAFTAR"
        Icons="book"
        warna={colors.secondary}
        onPress={() => navigation.navigate('Register')}
      />
      <Animated.View style={{height: top}} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
});
