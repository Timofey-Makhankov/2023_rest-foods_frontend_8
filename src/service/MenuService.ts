import { AxiosInstance } from "axios"
import { defaultAxiosInstance } from "./Api"
import { Menuitem } from "../types/MenuItem"

/**
 * This Menu Service Implements the 5 CRUD Methods to
 * Access the Data from Back-end
 * @param api The Axios Object given or default Axios Object
 * @returns a response from the Back-end
 * @author Timofey Makhankov
 * @copyright 2023
 */
const MenuService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllMenuItems:async () => {
        const data = await api.get('menus') 
        return data.data
    },
    getMenuItemById:async (id: number) => {
        const data = await api.get(`menus/${id}`) 
        return data.data
    },
    createMenuItem:async (menuItem: Menuitem) => {
        const data = await api.post('menus', menuItem)
        return data.data
    }, 
    updateMenuItem:async (id: number, menuItem: Menuitem) => {
        const data = await api.put(`menus/${id}`, menuItem) 
        return data.data
    },
    deleteMenuItem:async (id: number) => {
        const data = await api.delete(`menus/${id}`) 
        return data.data
    }
})

export default MenuService