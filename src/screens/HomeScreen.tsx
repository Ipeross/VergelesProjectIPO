import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { useStudent } from '../hooks/useStudent';
import { HttpError } from '../services/ApiService';

export default function HomeScreen() {
  const { student } = useStudent();

  return (
    <View>
      <FlatList
        data={student instanceof HttpError ? [] : student}
        renderItem={({ item }) =>
          <Card>
            <Card.Content>
              <Text> {item.name}</Text>
            </Card.Content>
          </Card>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({

  imageStyle: {
    marginTop:20,
    width: 300,
    height: 500,
    alignSelf: 'center'
  },

});