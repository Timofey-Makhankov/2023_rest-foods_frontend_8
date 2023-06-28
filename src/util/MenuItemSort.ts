import { Menuitem } from "../types/MenuItem";

/**
 * A functionm that sorts an array by category alphanumericly
 * @param list of the Menu Items
 * @returns a sorted List sorted by ChefsChoice
 * @author Timofey Makhankov
 * @copyright 2023
 */
export function sortMenuListByCategoryAlphanumeric(list: Menuitem[]): Menuitem[]{
    return list.sort((n1, n2) => {
        const text1 = n1.category.toLocaleLowerCase()
        const text2 = n2.category.toLocaleLowerCase()
        return (text1 < text2) ? -1 : (text1 > text2) ? 1 : 0
    })
}

/**
 * A functionm that sorts an array by Chefs Choice
 * @param list of the Menu Items
 * @returns a sorted List sorted by ChefsChoice
 * @author Timofey Makhankov
 * @copyright 2023
 */
export function sortMenuListByChefsChoice(list: Menuitem[]): Menuitem[]{
    return list.sort((n) => {
        return n.isChefsChoice ?  -1 : 1
    })
}