import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

export default function ClassLayout() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    
  }
});