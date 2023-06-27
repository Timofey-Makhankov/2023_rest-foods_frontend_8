import { useEffect, useState } from 'react'
import NavigationBar from '../organisms/NavigationBar'
import FooterNavigation from '../organisms/FooterNavigation'
import '../../style/menuList.css'
import { Container, Grid } from '@mui/material'
import { Menuitem } from '../../types/MenuItem'
import MenuItemCard from '../molecules/MenuItemCard'
import { sortMenuListByChefsChoice } from '../../util/MenuItemSort'

/**
 * This Page shows all the Menu Items that are available
 * @returns the Menu List Page Component
 * @author Timofey Makhankov
 * @copyright 2023
 */
export default function MenuList() {

  const exampleData: Menuitem[] = [
    {
      id: 1,
      name: "Title 1",
      price: 420.69,
      category: "Meditirainien",
      isChefsChoice: false,
      extraInfo: [],
      imageUrl: "https://market-table.com/wp-content/uploads/2018/06/foodbowl.jpg"
    },
    {
      id: 2,
      name: "Title 2",
      price: 420.69,
      category: "Meditirainien",
      isChefsChoice: true,
      extraInfo: [],
      imageUrl: "https://market-table.com/wp-content/uploads/2018/06/foodbowl.jpg"
    },
    {
      id: 3,
      name: "Title 3",
      price: 420.69,
      category: "Meditirainien",
      isChefsChoice: false,
      extraInfo: [],
      imageUrl: "https://market-table.com/wp-content/uploads/2018/06/foodbowl.jpg"
    },
    {
      id: 4,
      name: "Title 4",
      price: 420.69,
      category: "Meditirainien",
      isChefsChoice: true,
      extraInfo: [],
      imageUrl: "https://market-table.com/wp-content/uploads/2018/06/foodbowl.jpg"
    },
    {
      id: 5,
      name: "Title 5",
      price: 420.69,
      category: "Meditirainien",
      isChefsChoice: true,
      extraInfo: [],
      imageUrl: "https://market-table.com/wp-content/uploads/2018/06/foodbowl.jpg"
    },
    {
      id: 6,
      name: "Title 6",
      price: 420.69,
      category: "Meditirainien",
      isChefsChoice: false,
      extraInfo: [],
      imageUrl: "https://market-table.com/wp-content/uploads/2018/06/foodbowl.jpg"
    },
    {
      id: 7,
      name: "Title 7",
      price: 420.69,
      category: "Meditirainien",
      isChefsChoice: false,
      extraInfo: [],
      imageUrl: "https://market-table.com/wp-content/uploads/2018/06/foodbowl.jpg"
    },
    {
      id: 8,
      name: "Title 8",
      price: 420.69,
      category: "Meditirainien",
      isChefsChoice: true,
      extraInfo: [],
      imageUrl: "https://market-table.com/wp-content/uploads/2018/06/foodbowl.jpg"
    }
  ]
  const [menuList, setMenuList] = useState<Menuitem[]>([])

  useEffect(() => {
    function load(){
      setMenuList(sortMenuListByChefsChoice(exampleData))
    }
    load()
  }, [menuList, exampleData])
  

  return (
    <>
      <NavigationBar appBarStyle={{ backgroundColor: 'rgb(37, 37, 37)' }} />
      <main>
        <Container>
          <h1 className='menu-list-title'>Menu</h1>
          <Grid container spacing={3} style={{ padding: '12px' }}>
            {menuList.map((menu: Menuitem) => {
              return (
                <Grid item xs={4} key={menu.id}>
                  <MenuItemCard prop={menu} />
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </main>
      <FooterNavigation />
    </>
  )
}
