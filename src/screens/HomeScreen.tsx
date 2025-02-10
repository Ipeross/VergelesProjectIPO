import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { useStudent } from '../hooks/useStudent';
import { HttpError } from '../services/ApiService';
import { usePc } from '../hooks/usePc';

export default function HomeScreen() {
  const { students } = useStudent();
  const { pcs } = usePc();

  return (
    <View>
      <FlatList
        data={students instanceof HttpError ? [] : students}
        renderItem={({ item }) => {

          const studentPc = pcs instanceof HttpError 
            ? null : pcs.find(pc => pc.id === item.pcId);

          return (
            <Card>
              <Card.Content>
                <Text> {item.name}</Text>
                <Text> {item.id} </Text>
                
                <FlatList
                  data={item.grades}
                  renderItem={({ item }) =>
                    <Text> {item.subject} - {item.grade} </Text>
                  }
                />
                
                {studentPc ? (
                  <View>
                    <Text>PC: {studentPc.id}</Text>
                    <Text>Student Assigned: {studentPc.studentId}</Text>
                  </View>
                ) : (
                  <Text>No PC assigned</Text>
                )}
              </Card.Content>
            </Card>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  imageStyle: {
    marginTop: 20,
    width: 300,
    height: 500,
    alignSelf: 'center'
  },

});