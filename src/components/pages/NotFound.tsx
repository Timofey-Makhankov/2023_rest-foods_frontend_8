import NavigationBar from '../organisms/NavigationBar'
import FooterNavigation from '../organisms/FooterNavigation'
import '../../style/notFound.css'

export default function NotFound() {
    return (
        <div className='not-found-wrapper'>
            <NavigationBar appBarStyle={undefined} />
            <div className='not-found-content'>
                <p className='not-found-title'>404 - Not Found</p>
            </div>
            <FooterNavigation />
        </div>
    )
}
