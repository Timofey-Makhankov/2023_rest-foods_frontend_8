import NavigationBar from '../organisms/NavigationBar'
import FooterNavigation from '../organisms/FooterNavigation'
import '../../style/notFound.css'

/**
 * This Page shows a not found page
 * @returns the Not Found Page Component
 * @author Timofey Makhankov
 * @copyright 2023
 */
export default function NotFound() {
    return (
        <div className='not-found-wrapper'>
            <NavigationBar appBarStyle={{ backgroundColor: 'rgb(37, 37, 37)' }} />
            <div className='not-found-content'>
                <p className='not-found-title'>404 - Not Found</p>
            </div>
            <FooterNavigation />
        </div>
    )
}
