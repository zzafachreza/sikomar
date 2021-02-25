import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import LottieView from 'lottie-react-native';

export default function Home() {
  const [data, setData] = useState([
    {
      id: 0,
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/17/ca/76/1e/frontage.jpg',
    },
    {
      id: 1,
      image:
        'https://www.pegipegi.com/travel/wp-content/uploads/2018/04/shutterstock_663777415.jpg',
    },
    {
      id: 2,
      image:
        'https://blog.reservasi.com/wp-content/uploads/2018/08/wisata-alam-di-jawa-barat.jpg',
    },
  ]);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const ratio = 192 / 108;
  const _renderItem = ({item, index}) => {
    return (
      <ImageBackground
        source={{uri: item.image}}
        style={{
          width: windowWidth,
          height: Math.round((windowWidth * 9) / 16),
        }}>
        {/* <Text style={{fontSize: 30}}>{item.id}</Text> */}
      </ImageBackground>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: colors.primary,
          height: 100,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 2,
              left: 20,
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                fontSize: 18,
                maxWidth: '80%',
                color: 'white',
              }}>
              Selamat datang,
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontFamily: fonts.secondary[600],
                fontSize: 18,
                maxWidth: '80%',
                color: 'white',
              }}>
              Fachreza Maulana
            </Text>
          </View>
          <View
            style={{
              // flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/logooren.png')}
              style={{
                width: 621 / 4,
                height: 196 / 4,
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              height: 200,
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: colors.secondary,
              elevation: 5,
              borderRadius: 10,
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LottieView
              source={require('../../assets/kreatif.json')}
              autoPlay
              loop
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 0,
                fontSize: 18,
                fontFamily: fonts.secondary[600],
                color: colors.primary,
              }}>
              INDUSTRI KREATIF
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 200,
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: colors.secondary,
              elevation: 5,
              borderRadius: 10,
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LottieView
              source={require('../../assets/maps.json')}
              autoPlay
              loop
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 0,
                fontSize: 18,
                fontFamily: fonts.secondary[600],
                color: colors.primary,
              }}>
              INFO WISATA
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              height: 200,
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: colors.secondary,
              elevation: 5,
              borderRadius: 10,
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LottieView
              source={require('../../assets/partner.json')}
              autoPlay
              loop
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 0,
                fontSize: 18,
                fontFamily: fonts.secondary[600],
                color: colors.primary,
              }}>
              KEMITRAAN
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 200,
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: colors.secondary,
              elevation: 5,
              margin: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LottieView
              source={require('../../assets/boarding.json')}
              autoPlay
              loop
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 0,
                fontSize: 18,
                fontFamily: fonts.secondary[600],
                color: colors.primary,
              }}>
              USAHA PARIWISATA
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
