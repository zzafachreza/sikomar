import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../utils/colors';
import axios from 'axios';
import {fonts} from '../../utils/fonts';

export default function Menu2({navigation, route}) {
  const utama = route.params.utama;
  navigation.setOptions({title: utama});
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post('https://sikomarjabar.com/api/menu2.php', {
        utama: utama,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  const MenuList = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Menu3', {
            utama: item.menu,
          })
        }>
        <View
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            margin: 5,
            borderColor: colors.secondary,
            height: 100,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Image
            source={{uri: item.image}}
            style={{
              width: 80,
              height: 80,
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingLeft: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: colors.primary,
                textAlign: 'center',
              }}>
              {item.menu}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={
        {
          // padding: 10,
        }
      }>
      <View
        style={{
          backgroundColor: colors.primary,
          height: 100,
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 20,
              maxWidth: '60%',
              color: colors.white,
            }}>
            Data dan Informasi Industri Pariwisata Jawa Barat
          </Text>

          <Image
            source={require('../../assets/logooren.png')}
            style={{
              width: 621 / 4,
              height: 196 / 4,
            }}
          />
        </View>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <FlatList data={data} renderItem={MenuList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
