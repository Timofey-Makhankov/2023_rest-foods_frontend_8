import { useParams } from 'react-router-dom'
import NavigationBar from '../organisms/NavigationBar'
import FooterNavigation from '../organisms/FooterNavigation'

export default function DetailedMenu() {

  const { id } = useParams()

  return (
    <>
      <NavigationBar appBarStyle={{ backgroundColor: 'rgb(37, 37, 37)' }} />
      <main>
        <div>{id}</div>
      </main>
      <FooterNavigation />
    </>
  )
}
