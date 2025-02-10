import { Grade } from "./GradeEntity";
import { Pc } from "./PcEntity";

export interface Student {
    name: String
    id: String
    grades: Grade[]
    pcId: number
}