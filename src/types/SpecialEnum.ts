export enum Special{
    vegan = 'vegan',
    vegetarien = 'vegetarien',
    lactoseFree = 'lactose-free',
    glutenFree = 'gluten-free'
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Special {
    export function toSpecial(input: string){
        return input as Special
    }
}