import { StyleSheet, Text, View } from "react-native";
import BarChartComponent from "../components/BarChartComponent";
import { RouteProp } from "@react-navigation/native";
import { PerformanceStackParamList } from "../types/navigation";

type PerformanceChartScreenProps = {
  route: RouteProp<PerformanceStackParamList, 'PerformanceChart'>;
};

export default function PerformanceChartScreen({ route }: PerformanceChartScreenProps) {
  const { studentName, studentId, grades } = route.params;
  
  return (
    <View>
      <Text style={{marginBottom: 20}}>Rendimiento de {studentName}</Text>
      <BarChartComponent studentName={studentName} studentId={studentId} grades={grades} />
    </View>
  );
}