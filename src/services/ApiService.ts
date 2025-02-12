import { Pc } from "../entities/PcEntity";
import { Student } from "../entities/StudentEntity";

export class HttpError {
    message: string;
    constructor(message: string) {
        this.message = message;
    }
}

export class ApiService {
    private static BASE_URL = "http://192.168.1.137:3000";

    static async getStudents(): Promise<Student[] | HttpError> {
        try {
            const response = await fetch(`${this.BASE_URL}/students`);
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }
            const data = await response.json();
            console.log("Students service");
            return data;
        } catch (error) {
            console.log("Error service:", error);
            return new HttpError(`${error}`);
        }
    }

    static async getPcs(): Promise<Pc[] | HttpError> {
        try {
            const response = await fetch(`${this.BASE_URL}/pcs`);
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }
            const data = await response.json();
            console.log("Pcs service");
            return data;
        } catch (error) {
            console.log("Error service:", error);
            return new HttpError(`${error}`);
        }
    }
}