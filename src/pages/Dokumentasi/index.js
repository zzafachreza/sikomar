import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import MyHeader from '../../components/MyHeader';
import {color} from 'react-native-reanimated';
import {colors} from '../../utils/colors';
import axios from 'axios';
import {fonts} from '../../utils/fonts';

export default function Dokumentasi({navigation, route}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const item = route.params;
  console.log(item);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post('https://sikomarjabar.com/api/dokumentasi.php', {
        key: item.kategori,
      })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  }, []);

  const MenuList = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={1}>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            borderWidth: 1,
            marginBottom: 5,
            borderColor: colors.secondary,
            height: windowHeight / 2.5,
            // alignItems: 'center',
            overflow: 'hidden',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <Image
              //   resizeMode="contain"
              style={{
                // aspectRatio: 1,
                width: windowWidth,
                height: windowHeight / 3,
              }}
              source={{
                uri: item.image,
              }}
            />
            <Text
              style={{
                fontSize: windowWidth / 25,
                color: colors.primary,
                fontFamily: fonts.secondary[600],
                textAlign: 'center',
                margin: 5,
              }}>
              {item.nama}
            </Text>
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
          {item.kategori}
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
