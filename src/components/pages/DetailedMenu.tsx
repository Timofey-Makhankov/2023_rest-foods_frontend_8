import { useParams } from 'react-router-dom'
import NavigationBar from '../organisms/NavigationBar'
import FooterNavigation from '../organisms/FooterNavigation'
import { Container, Grid } from '@mui/material'

export default function DetailedMenu() {

  const { id } = useParams()

  return (
    <>
      <NavigationBar appBarStyle={{ backgroundColor: 'rgb(37, 37, 37)' }} />
      <main>
        <Container>
          <Grid container>
            <Grid xs={6} item>
              <img src="" alt="No Image" height={400}/>
            </Grid>
            <Grid xs={6} item>
              <Grid container direction='column' alignItems='center'>
                <Grid item xs={12}>
                  <h1>{id}</h1>
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
