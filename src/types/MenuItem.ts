/**
 * a Menu Item with all properties for a menu Item
 * @author Timofey Makhankov
 * @copyright 2023
 */
export interface Menuitem {
    id: number,
    name: string,
    price: number,
    category: string,
    isChefsChoice: boolean,
    extraInfo: string[],
    imageUrl: string,
    description: string
}