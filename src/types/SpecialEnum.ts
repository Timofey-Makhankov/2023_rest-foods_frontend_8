/**
 * special Enum showing all the different Special things a menu can describe
 * @author Timofey Makhankov
 * @copyright 2023
 */
export enum Special{
    vegan = 'vegan',
    vegetarien = 'vegetarien',
    lactoseFree = 'lactose-free',
    glutenFree = 'gluten-free'
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Special {
    /**
     * convert a string to a Enum Type of Special
     * @param input given as string
     * @returns a Special Enum from the given string
     * @author Timofey Makhankov
     * @copyright 2023
     */
    export function toSpecial(input: string){
        return input as Special
    }
}