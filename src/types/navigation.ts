import { Grade } from "../entities/GradeEntity";

export type PerformanceStackParamList = {
    PerformanceSearch: undefined;
    PerformanceChart: { studentName: String , studentId: String, grades: Grade[]};
  };