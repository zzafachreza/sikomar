import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import LottieView from 'lottie-react-native';
import {getData} from '../../utils/localStorage';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {Preview} from '../../components';
import {Icon} from 'react-native-elements';
import MyNews from '../../components/MyNews';

export default function Home({navigation}) {
  const images = [
    {
      image:
        'https://sikomarjabar.com/admin/upload/210320035446210304063349EJP_3248.jpg',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image:
        'https://sikomarjabar.com/admin/upload/210320035331210312034824EJP_3892-min.jpg',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://sikomarjabar.com/admin/upload/210320035918210304063632tebing%20keraton.jpg',
    },
  ];

  const [data, setData] = useState([
    {
      id: 0,
      image:
        'https://sikomarjabar.com/admin/upload/210304055804suaka-elang-loji-bogor-jawa-barat.jpg',
    },
    // {
    //   id: 1,
    //   image:
    //     'https://sikomarjabar.com/admin/upload/210304055856geopark-Ciletuh.jpg',
    // },
  ]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getData('user').then((res) => {
      console.log(res);
      setUser(res);
    });
  }, []);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const ratio = 192 / 108;
  const _renderItem = ({item, index}) => {
    return (
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={{
          width: windowWidth,
          height: Math.round((windowWidth * 9) / 16),
        }}
      />
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: colors.secondary,
      }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: colors.primary,
            height: windowWidth / 3,
            // borderBottomLeftRadius: 20,
            // borderBottomRightRadius: 20,
            padding: 20,
          }}>
          <View style={{padding: 10}}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 23,
                maxWidth: '80%',
                color: colors.white,
              }}>
              Data dan Informasi Industri Pariwisata Jawa Barat
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 2,
                left: 10,
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[400],
                  fontSize: windowWidth / 25,
                  maxWidth: '80%',
                  color: 'white',
                }}>
                Selamat datang,
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  fontFamily: fonts.secondary[600],
                  fontSize: windowWidth / 25,
                  maxWidth: '80%',
                  color: 'white',
                }}>
                {user.nama_lengkap}
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
                  width: 621 / 6,
                  height: 196 / 6,
                }}
              />
            </View>
          </View>
        </View>
        {/* <FlatListSlider data={images} /> */}

        <FlatListSlider
          data={images}
          width={windowWidth}
          timer={5000}
          contentContainerStyle={{
            borderRadius: 20,
          }}
          indicatorInActiveColor={colors.secondary}
          // component={<Preview />}
          onPress={(item) => alert(JSON.stringify(item))}
          indicatorActiveWidth={20}
          indicatorActiveColor={colors.primary}
        />

        {/* <Carousel
        layout="default"
        layoutCardOffset={9}
        data={data}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        renderItem={_renderItem}
        activeDotIndex
        autoplay={true}
        autoplayDelay={2000}
        autoplayInterval={3000}
        // activeAnimationType="spring"
        loop={true}
        // onSnapToItem = { index => this.setState({activeIndex:index}) }
      /> */}

        <View
          style={{
            // flex: 1,
            padding: 10,

            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Icon type="ionicon" name="grid" color={colors.primary} size={16} />
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                color: colors.primary,
                left: 10,
                fontSize: windowWidth / 28,
              }}>
              KATEGORI
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Menu1', {
                  menuUtama: 'INDUSTRI KREATIF',
                })
              }>
              <View
                style={{
                  flex: 1,
                  height: 100,
                  // backgroundColor: 'white',
                  // borderWidth: 1,
                  // // borderColor: colors.primary,
                  elevation: 1,
                  borderRadius: 10,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/1.png')}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Text
                  style={{
                    fontSize: windowWidth / 40,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    textAlign: 'center',
                    top: 10,
                  }}>
                  INDUSTRI KREATIF
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Menu1', {
                  menuUtama: 'INFO WISATA',
                })
              }>
              <View
                style={{
                  flex: 1,
                  height: 100,
                  // backgroundColor: 'white',
                  // // borderWidth: 2,
                  // // borderColor: colors.primary,
                  // elevation: 5,
                  // borderRadius: 10,

                  elevation: 1,
                  borderRadius: 10,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/2.png')}
                  style={{
                    width: 60,
                    bottom: 5,
                    height: 60,
                  }}
                />
                <Text
                  style={{
                    fontSize: windowWidth / 40,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    textAlign: 'center',
                    top: 10,
                  }}>
                  INFO WISATA
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Menu1', {
                  menuUtama: 'KEMITRAAN',
                })
              }>
              <View
                style={{
                  flex: 1,
                  height: 100,
                  // backgroundColor: 'white',
                  // // borderWidth: 2,
                  // // borderColor: colors.primary,
                  // elevation: 5,
                  // borderRadius: 10,
                  elevation: 1,
                  borderRadius: 10,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/3.png')}
                  style={{
                    width: 60,
                    bottom: 5,
                    height: 60,
                  }}
                />
                <Text
                  style={{
                    fontSize: windowWidth / 40,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    textAlign: 'center',
                    top: 10,
                  }}>
                  KEMITRAAN
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Menu1', {
                  menuUtama: 'USAHA PARIWISATA',
                })
              }>
              <View
                style={{
                  flex: 1,
                  height: 100,
                  // backgroundColor: 'white',
                  // // borderWidth: 2,
                  // // borderColor: colors.primary,
                  // elevation: 5,
                  // borderRadius: 10,
                  elevation: 1,
                  borderRadius: 10,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/4.png')}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Text
                  style={{
                    fontSize: windowWidth / 40,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    textAlign: 'center',
                    top: 10,
                  }}>
                  USAHA PARIWISATA
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          {/* <View style={{flexDirection: 'row'}}>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Menu1', {
                  menuUtama: 'KEMITRAAN',
                })
              }>
              <View
                style={{
                  flex: 1,
                  height: 120,
                  // backgroundColor: 'white',
                  // // borderWidth: 2,
                  // // borderColor: colors.primary,
                  // elevation: 5,
                  // borderRadius: 10,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/3.png')}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    fontSize: 12,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                  }}>
                  KEMITRAAN
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Menu1', {
                  menuUtama: 'USAHA PARIWISATA',
                })
              }>
              <View
                style={{
                  flex: 1,
                  height: 120,
                  // backgroundColor: 'white',
                  // borderWidth: 2,
                  // borderColor: colors.primary,
                  // elevation: 5,
                  margin: 5,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/4.png')}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    fontSize: 12,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                  }}>
                  USAHA PARIWISATA
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View> */}
          {/* kabar berita */}
        </View>
        <View
          style={{
            backgroundColor: colors.primary,
            // padding: 20,
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Icon type="ionicon" name="map" color="#FFF" size={16} />
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                color: '#FFF',
                left: 10,
                fontSize: 16,
              }}>
              REKOMENDASI WISATA
            </Text>
          </View>
          <MyNews />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
