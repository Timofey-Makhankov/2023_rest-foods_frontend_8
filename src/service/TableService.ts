import { AxiosInstance } from "axios"
import { defaultAxiosInstance } from "./Api"
import { Table } from "../types/Table"

/**
 * This Table Service Implements the 5 CRUD Methods to
 * Access the Data from Back-end
 * @param api The Axios Object given or default Axios Object
 * @returns a response from the Back-end
 * @author Timofey Makhankov
 * @copyright 2023
 */
const TableService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllTables:async () => {
        const data = await api.get('tableplaces') // TODO - change the URL
        return data // TODO - check JSON reponse and update value
    },
    getTableById:async (id: number) => {
        const data = await api.get(`tableplaces/${id}`) // TODO - change the URL
        return data // TODO - check JSON reponse and update value
    },
    createTable:async (table: Table) => {
        const data = await api.post('tableplaces', table) // TODO - change the URL
        return data // TODO - check JSON reponse and update value
    },
    updateTable:async (id: number, table: Table) => {
        const data = await api.put(`tableplaces/${id}`, table) // TODO - change the URL
        return data // TODO - check JSON reponse and update value
    },
    deleteTable:async (id: number) => {
        const data = await api.delete(`tableplaces/${id}`) // TODO - change the URL
        return data // TODO - check JSON reponse and update value
    }
})

export default TableService