import React, {useState} from 'react';
import {View, Text, Dimensions, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';

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
    <View>
      <Carousel
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
        activeAnimationType="spring"
        loop={true}
        // onSnapToItem = { index => this.setState({activeIndex:index}) }
      />
    </View>
  );
}
