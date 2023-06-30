import { Menuitem } from '../types/MenuItem'
import { sortMenuListByCategoryAlphanumeric, sortMenuListByChefsChoice } from '../util/MenuItemSort'
import { describe, expect, it } from 'vitest'

const MenuList: Menuitem[] = [
    {
        id: 1,
        name: "Beaver",
        category: "B",
        price: 69,
        isChefsChoice: false,
        extraInfo: [],
        imageUrl: "",
        description: ""
    }, 
    {
        id: 2,
        name: "Zebra",
        category: "Z",
        price: 69,
        isChefsChoice: true,
        extraInfo: [],
        imageUrl: "",
        description: ""
    }, 
    {
        id: 3,
        name: "Animal",
        category: "A",
        price: 69,
        isChefsChoice: false,
        extraInfo: [],
        imageUrl: "",
        description: ""
    }
]

describe("#sortMenuListByCategoryAlphanumeric", () => {
    it("sort A List of Menu Items by Category Alphanumericly", () => {
        expect(sortMenuListByCategoryAlphanumeric(MenuList.map(x => x))[0]).toBe(MenuList[2])
    })
    it("Return a empty list when given an empty list", () => {
        expect(sortMenuListByCategoryAlphanumeric([])).toStrictEqual([])
    })
})

describe("#sortMenuListByChefsChoice", () => {
    it("sort A List of Menu Items by ChefsChoice", () => {
        expect(sortMenuListByChefsChoice(MenuList.map(x => x))[0]).toBe(MenuList[1])
    })
    it("sort A List of Menu Items by ChefsChoice", () => {
        expect(sortMenuListByChefsChoice([])).toStrictEqual([])
    })
})
