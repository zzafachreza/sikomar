import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {fonts} from '../../utils/fonts';

export default function Berita({navigation, route}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const item = route.params;
  return (
    <View>
      <Image
        style={{
          width: windowWidth,
          height: windowHeight / 3,
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{
          padding: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 18,
            marginVertical: 10,
          }}>
          {item.nama}
        </Text>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 23,
            marginVertical: 10,
          }}>
          {item.ket}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
