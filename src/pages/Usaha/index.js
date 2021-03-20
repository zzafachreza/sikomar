import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MyHeader from '../../components/MyHeader';
import {color} from 'react-native-reanimated';
import {colors} from '../../utils/colors';
import axios from 'axios';
import {fonts} from '../../utils/fonts';

export default function Usaha({navigation, route}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const lokasi = route.params;
  console.log(lokasi);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post('https://sikomarjabar.com/api/jenis_usaha.php', {
        lokasi: lokasi.lokasi,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  const MenuList = ({item}) => {
    let warna = '';

    if (item.JENIS == 'HOTEL') {
      warna = 'red';
    } else {
      warna = 'brown';
    }
    return (
      <TouchableOpacity activeOpacity={1}>
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
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingLeft: 20,
            }}>
            <Text
              style={{
                fontSize: windowWidth / 25,
                color: colors.primary,
                fontFamily: fonts.secondary[600],
              }}>
              {item.NAMA}
            </Text>
            <Text
              style={{
                fontSize: windowWidth / 30,
                color: colors.primary,
                fontFamily: fonts.secondary[400],
              }}>
              {item.ALAMAT}
            </Text>
            <View
              style={{
                backgroundColor: warna,
                padding: 5,
                marginTop: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                {item.JENIS}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 10,
        // padding: 10,
      }}>
      <MyHeader />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: windowWidth / 20,
          }}>
          {lokasi.lokasi}
        </Text>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={MenuList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
