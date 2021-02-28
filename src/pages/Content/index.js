import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors} from '../../utils/colors';
import axios from 'axios';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {fonts} from '../../utils/fonts';

export default function Content({navigation, route}) {
  const utama = route.params.utama;
  navigation.setOptions({title: utama});

  const data = [
    {
      name: 'Pangandaran',
      population: 800,
      color: colors.primary,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
      legendFontFamily: fonts.secondary[400],
    },
    {
      name: 'Santolo',
      population: 680,
      color: colors.secondary,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
      legendFontFamily: fonts.secondary[400],
    },
    {
      name: 'Rancabuaya',
      population: 300,
      color: colors.tertiary,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
      legendFontFamily: fonts.secondary[400],
    },
    {
      name: 'Cidaun',
      population: 202,
      color: '#38649D',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
      legendFontFamily: fonts.secondary[400],
    },
    {
      name: 'Ujung Genteng',
      population: 200,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
      legendFontFamily: fonts.secondary[400],
    },
  ];

  const dataBar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: colors.secondary,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.primary,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View
      style={{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Jumlah Pengunjung</Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 50} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      <PieChart
        data={data}
        width={Dimensions.get('window').width - 50}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'0'}
        center={[10, 10]}
        absolute
      />
    </View>
  );
}

const styles = StyleSheet.create({});
