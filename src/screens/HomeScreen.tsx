import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Card } from 'react-native-paper';
import { HttpError } from '../services/ApiService';
import { useStore } from '../store/store';

export default function HomeScreen() {
  const { students, pcs, loadStudents, loadPcs } = useStore();

  useEffect(() => {
    loadStudents();
    loadPcs();
  }, []);

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