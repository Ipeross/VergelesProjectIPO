import { useEffect, useState } from "react"
import { Student } from "../entities/StudentEntity";
import { HttpError, ApiService } from "../services/ApiService";

export const useStudent = () => {
    const [student, setStudents] = useState<Student[] | HttpError>([]);

    const loadStudents = async () => {
        const response = await ApiService.getStudents(); 
    
        if (response) {
          console.log(response);
          setStudents(response); 
        }

      };
    
      useEffect(() => {
        loadStudents(); 
      }, []);
    
      console.log("Student list: " + student);

      return {
        student,
      };
    };