import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Platform,
  Slider,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
  Circle,
  Geojson,
} from 'react-native-maps';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

export default function Kawasan() {
  let _map = null;
  let _carousel = null;
  const [currentLocation, setcurrentLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const [radius, setRadius] = useState(1000);
  const [markers, setMarker] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    locateCurrentPosition();
    axios.get('https://sikomarjabar.com/api/kawasan.php').then((res) => {
      setCoordinates(res.data);
      console.log(res.data);
    });
  }, []);

  const locateCurrentPosition = () => {
    Geolocation.getCurrentPosition((position) => {
      console.log(JSON.stringify(position));

      setcurrentLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,
      });

      setLoading(false);
    });
  };

  const onMarkerPressed = (location, index) => {
    console.log(location, index);
    _map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });
    _carousel.snapToItem(index);
  };

  const onCarouselItemChange = (index) => {
    let location = coordinates[index];

    _map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });

    markers[index].showCallout();
  };

  const renderCarouselItem = ({item}) => (
    <View style={styles.cardContainer} key={item.id}>
      <Text style={styles.cardTitle}>{item.nama}</Text>
      <Image style={styles.cardImage} source={item.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={(ref) => (_map = ref)}
        showsUserLocation={true}
        style={styles.map}
        initialRegion={currentLocation}>
        {coordinates.map((marker, index) => (
          <Marker
            key={marker.name}
            ref={(ref) => (markers[index] = ref)}
            onPress={() => onMarkerPressed(marker, index)}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}>
            <Image
              source={{uri: 'https://sikomarjabar.com/images/logo/marker.png'}}
              style={{height: 20, width: 25}}
            />
            <Callout
              style={{flex: 1, position: 'absolute', width: 150, height: 80}}>
              <View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                      fontSize: 20,
                    }}>
                    {marker.nama}
                  </Text>
                  <Text
                    style={
                      {
                        // fontWeight: 'bold',
                      }
                    }>
                    {marker.desc}
                  </Text>
                </View>
                <View>
                  <Image
                    source={{
                      uri: 'https://facebook.github.io/react/logo-og.png',
                    }}
                    style={{width: 100, height: 100}}
                  />
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Carousel
        ref={(c) => (_carousel = c)}
        data={coordinates}
        containerCustomStyle={styles.carousel}
        renderItem={renderCarouselItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={300}
        removeClippedSubviews={false}
        onSnapToItem={(index) => onCarouselItemChange(index)}
      />
      {loading && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
            width: '100%',
            top: 0,
            opacity: 0.7,
            height: '100%',
          }}>
          <ActivityIndicator color="#16A858" size="large" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 48,
  },
  cardContainer: {
    backgroundColor: '#274996',
    opacity: 0.8,
    height: 80,
    width: 300,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 24,
  },
  cardImage: {
    height: 120,
    width: 300,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
  },
});
