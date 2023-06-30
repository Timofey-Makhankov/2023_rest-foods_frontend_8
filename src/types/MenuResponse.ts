/**
 * All the properties of the menu API response
 * @author Timofey Makhankov
 * @copyright 2023
 */
export interface MenuResponse{
    menu_id: number,
    name: string,
    price: number,
    category: string,
    isChefsChoice: false,
    imageURL: string,
    clarifications: [],
    description: string
}