import { Menuitem } from "../types/MenuItem";

export function sortMenuListByChefsChoice(list: Menuitem[]): Menuitem[]{
    return list.sort((n) =>{
        if(n.isChefsChoice){
            return -1
        } else {
            return 1
        }
    })
}