import { Menuitem } from "../types/MenuItem";

/**
 * A functionm that sorts an array by Chefs Choice
 * @param list of the Menu Items
 * @returns a sorted List sorted by ChefsChoice
 * @author Timofey Makhankov
 * @copyright 2023
 */
export function sortMenuListByChefsChoice(list: Menuitem[]): Menuitem[]{
    return list.sort((n) =>{
        if(n.isChefsChoice){
            return -1
        } else {
            return 1
        }
    })
}