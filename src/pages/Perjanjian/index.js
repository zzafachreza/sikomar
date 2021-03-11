import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {MyInput} from '../../components';
import axios from 'axios';
import {color} from 'react-native-reanimated';

export default function Perjanjian({navigation, route}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [data, setData] = useState([]);
  const [key, setKey] = useState('');

  const getData = () => {
    axios.get('https://sikomarjabar.com/api/perjanjian.php').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const searchData = () => {
    axios
      .post('https://sikomarjabar.com/api/perjanjian.php', {
        key: key,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('PerjanjianDetail', item)}>
        <View
          style={{
            shadowColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: -10,
              height: 2,
            },
            shadowOpacity: 0.44,
            shadowRadius: 5.32,

            elevation: 1,

            borderRadius: 10,
            overflow: 'hidden',
            backgroundColor: 'white',
            marginBottom: 10,
            marginTop: 10,
            flex: 1,

            marginHorizontal: 5,
            padding: 10,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{
                // flex: 1,
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.primary,
                  fontFamily: fonts.secondary[600],
                }}>
                {item.nama}
              </Text>
            </View>
          </View>
          <View
            style={{
              bottom: 0,
              right: 0,
              position: 'absolute',
              width: 100,
              backgroundColor: colors.danger,
              borderTopLeftRadius: 10,
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: colors.white,
                fontFamily: fonts.secondary[600],
                maxWidth: '100%',
              }}>
              PDF
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F3F1F3',
      }}>
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
        <TextInput
          placeholder="Pencarian sertfikat"
          style={{
            fontFamily: fonts.secondary[400],
            fontSize: 12,
            borderWidth: 1,
            height: 45,
            paddingLeft: 10,
            borderRadius: 10,
            borderColor: colors.primary,
          }}
          value={key}
          onChangeText={(val) => {
            setKey(val);
            searchData();
          }}
        />
        {/* <Text>{key}</Text> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
