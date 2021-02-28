import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/colors';
import axios from 'axios';

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
            justifyContent: 'center',
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
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        padding: 10,
      }}>
      <FlatList data={data} renderItem={MenuList} />
    </View>
  );
}

const styles = StyleSheet.create({});
