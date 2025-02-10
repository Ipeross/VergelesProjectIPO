import { useEffect, useState } from "react"

import { HttpError, ApiService } from "../services/ApiService";
import { Pc } from "../entities/PcEntity";

export const usePc = () => {
    const [pcs, setPcs] = useState<Pc[] | HttpError>([]);

    const loadPcs = async () => {
        const response = await ApiService.getPcs();

        if (response) {
            console.log(response);
            setPcs(response);
        }

    };

    useEffect(() => {
        loadPcs();
    }, []);

    console.log("Pc list: " + pcs);

    return {
        pcs,
    };
};