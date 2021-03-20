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
import MyHeader from '../../components/MyHeader';

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
    let tujuan = '';
    if (item.menu == 'WISATA HALAL') {
      tujuan = 'Dokumentasi';
    } else if (item.menu == 'MONEV HOTEL') {
      tujuan = 'Dokumentasi';
    } else if (item.menu == 'FORUM GROUP DISCCUSION') {
      tujuan = 'Dokumentasi';
    } else if (item.menu == 'COFFEE MORNING') {
      tujuan = 'Dokumentasi';
    } else {
      tujuan = 'Menu3';
    }
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(tujuan, {
            utama: item.menu,
            kategori: item.menu,
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
      <MyHeader />
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
