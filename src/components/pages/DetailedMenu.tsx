import { useParams } from 'react-router-dom'
import NavigationBar from '../organisms/NavigationBar'
import FooterNavigation from '../organisms/FooterNavigation'
import { Container, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import MenuService from '../../service/MenuService'
import { MenuResponse } from '../../types/MenuResponse'
import { Menuitem } from '../../types/MenuItem'
import ChefIcon from '../molecules/ChefIcon'

export default function DetailedMenu() {
  
  const { id } = useParams()
  const [menuItem, setMenuItem] = useState<Menuitem>()

  useEffect(() => {
    function load() {
      MenuService().getMenuItemById(Number(id))
        .then((data: MenuResponse) => {
          setMenuItem({
            id: data.menu_id,
            name: data.name,
            price: data.price,
            category: data.category,
            imageUrl: data.imageURL,
            extraInfo: data.clarifications,
            isChefsChoice: data.isChefsChoice ? true : false
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
    load()
  }, [id])

  return (
    <>
      <NavigationBar appBarStyle={{ backgroundColor: 'rgb(37, 37, 37)' }} />
      <main>
        <Container>
          <Grid container sx={{ padding: '40px 0px' }}>
            <Grid xs={6} item>
              <Grid container direction='column' alignItems='center'>
                <Grid item xs={12}>
                  <img src={menuItem?.imageUrl} alt="No Image" width={400} style={{ borderRadius: '12px' }} />
                </Grid>
                <Grid item xs={12}>
                  <Typography component='p' variant='h4' >Chef's Choice: <ChefIcon /></Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={6} item>
              <Grid container direction='column' alignItems='center'>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <Typography component='h1' variant='h2' fontWeight={700}>{menuItem?.name}</Typography>
                  <Typography component='p' variant='h5'>Category</Typography>
                  <Typography>{menuItem?.category}</Typography>
                  <Typography>Price: {menuItem?.price}CHF</Typography>
                  <Grid container gap={3} justifyContent='center'>
                    {menuItem?.extraInfo.map(element => {
                      return (
                        <div>{element}</div>
                      )
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
      <FooterNavigation />
    </>
  )
}
