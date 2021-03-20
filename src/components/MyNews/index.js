import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {fonts} from '../../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function MyNews() {
  useEffect(() => {
    axios.get('https://sikomarjabar.com/api/berita.php').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Berita', item)}
        activeOpacity={0.9}
        style={{
          // flex: 1,
          margin: 10,
          width: 200,
          height: 200,
          borderRadius: 10,
          backgroundColor: 'white',
          overflow: 'hidden',
        }}>
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={{width: '100%', aspectRatio: 1.5}}
        />
        <View style={{padding: 10}}>
          <Text style={{fontSize: 14, fontFamily: fonts.secondary[600]}}>
            {item.nama}
          </Text>
          <Text style={{fontSize: 12, fontFamily: fonts.secondary[400]}}>
            {item.ket}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flex: 1,

          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* batas */}

        <FlatList horizontal renderItem={_renderItem} data={data} />

        {/* batas */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
