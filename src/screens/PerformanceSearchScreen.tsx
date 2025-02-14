import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button, Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";
import { useStore } from "../store/store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PerformanceStackParamList } from "../types/navigation";
import { Student } from "../entities/StudentEntity";
import { SafeAreaView } from "react-native-safe-area-context";


type PerformanceSearchScreenProps = {
  navigation: NativeStackNavigationProp<PerformanceStackParamList, 'PerformanceSearch'>;
};

export default function PerformanceSearchScreen({ navigation }: PerformanceSearchScreenProps) {
  const { students, loadStudents } = useStore();
  
  useEffect(() => {
    loadStudents();
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredStudents(students);
    } else {
      setFilteredStudents(
        students.filter((student) => 
          student.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 17, padding: 20 }}>
        Buscar alumno por nombre:
      </Text>
      <Searchbar
        style={{ marginBottom: 20 }}
        placeholder="Buscar..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredStudents}
        keyExtractor={(student) => student.id.toString()}
        renderItem={({ item: student }) => (
          <Button
            style={{ margin: 10, borderRadius: 5}}
            mode="outlined"
            onPress={() => {
              navigation.navigate('PerformanceChart', {
                studentName: student.name,
                studentId: student.id,
                grades: student.grades
              });
            }}
          >
            {student.name}
          </Button>
        )}
      />
    </SafeAreaView>
  );
}