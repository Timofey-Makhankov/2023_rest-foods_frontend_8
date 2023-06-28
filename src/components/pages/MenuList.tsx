import { useEffect, useState } from 'react'
import NavigationBar from '../organisms/NavigationBar'
import FooterNavigation from '../organisms/FooterNavigation'
import '../../style/menuList.css'
import { Container, Grid } from '@mui/material'
import { Menuitem } from '../../types/MenuItem'
import MenuItemCard from '../molecules/MenuItemCard'
import { sortMenuListByCategoryAlphanumeric, sortMenuListByChefsChoice } from '../../util/MenuItemSort'
import MenuService from '../../service/MenuService'
import { MenuResponse } from '../../types/MenuResponse'

/**
 * This Page shows all the Menu Items that are available
 * @returns the Menu List Page Component
 * @author Timofey Makhankov
 * @copyright 2023
 */
export default function MenuList() {
  const [menuList, setMenuList] = useState<Menuitem[]>([])

  useEffect(() => {
    function load(){
      MenuService().getAllMenuItems()
      .then((data) => {
        const formattedResponse: Menuitem[] = []
        data.forEach((element: MenuResponse) => {
          formattedResponse.push({
            id: element.menu_id,
            name: element.name,
            price: element.price,
            category: element.category,
            imageUrl: element.imageURL,
            extraInfo: element.clarifications,
            isChefsChoice: element.isChefsChoice ? true : false
          })
        });
        setMenuList(sortMenuListByChefsChoice(sortMenuListByCategoryAlphanumeric(formattedResponse)))
      })
      .catch((error) => {
        console.log(error)
      })
    }
    load()
  }, [])
  

  return (
    <>
      <NavigationBar appBarStyle={{ backgroundColor: 'rgb(37, 37, 37)' }} />
      <main>
        <Container>
          <h1 className='menu-list-title'>Menu</h1>
          <Grid container spacing={3} style={{ padding: '12px' }}>
            {menuList.map((menu: Menuitem) => {
              return (
                <Grid key={menu.id} item xs={4}>
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
