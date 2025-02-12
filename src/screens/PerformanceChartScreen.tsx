import { FlatList, StyleSheet, Text, View } from "react-native";
import BarChartComponent from "../components/BarChartComponent";
import * as React from 'react';


export default function PerformanceChartScreen() {
  return (
    <View>
      <BarChartComponent></BarChartComponent>
    </View>
  )
}

const styles = StyleSheet.create({

});