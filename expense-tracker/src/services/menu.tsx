import axios from "axios";
import DataListInterface from "../model/DataListInterface";

export const getDataFromServer = () =>{
    return axios.get<DataListInterface[]>(`http://localhost:3001/items`)
                .then( response => response.data );
}

export const pushDataFromUser = (newPurchase : Omit<DataListInterface,"id">) => {
    return axios.post<DataListInterface>(`http://localhost:3001/items`,
        newPurchase,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then( response => response.data )
}
