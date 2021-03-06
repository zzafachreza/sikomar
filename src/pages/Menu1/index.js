import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../../utils/colors';
import axios from 'axios';
import {fonts} from '../../utils/fonts';
import MyHeader from '../../components/MyHeader';

export default function Menu1({navigation, route}) {
  const utama = route.params.menuUtama;
  navigation.setOptions({title: utama});
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post('https://sikomarjabar.com/api/menu1.php', {
        utama: utama,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  const MenuList = ({item}) => {
    let tujuan = '';
    if (item.menu == 'PELAKU EKRAF') {
      tujuan = 'Ekraf';
    } else if (item.menu == 'PERJANJIAN KERJASAMA') {
      tujuan = 'Perjanjian';
    } else if (item.menu == 'KAWASAN PARIWISATA') {
      tujuan = 'Kawasan';
    } else {
      tujuan = 'Menu2';
    }
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(tujuan, {
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
