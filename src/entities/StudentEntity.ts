import { Grade } from "./GradeEntity";
import { Pc } from "./PcEntity";

export interface Student {
    name: String;
    grades: Grade;
    pc: Pc
}