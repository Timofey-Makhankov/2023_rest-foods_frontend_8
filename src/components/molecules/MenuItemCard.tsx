import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Menuitem } from '../../types/MenuItem'
import ChefIcon from './ChefIcon'
import { Link as RouterLink } from 'react-router-dom'
import { DETAILED_MENU_PAGE } from '../../Constants'

/**
 * A Menu Card with some Information
 * @param prop takes a Menuitem Type as input
 * @returns a MenuItemCard Component with the data from the prop
 * @author Timofey Makhankov
 * @copyright 2023
 */
export default function MenuItemCard({ prop }: {prop: Menuitem}) {
  return (
    <Card>
        <CardActionArea component={RouterLink} to={DETAILED_MENU_PAGE.replace(':id', `${prop.id}`)} >
            <CardMedia
            component='img'
            height='190'
            image={prop.imageUrl}
            alt='Menu item'
            />
            <CardContent>
                <Typography gutterBottom component='div' variant='h4' fontWeight={700}>{prop.name}</Typography>
                <Typography gutterBottom component='p'>{prop.price}CHF</Typography>
                <Typography gutterBottom component='p'>Category: {prop.category}</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <ChefIcon sx={{ visibility: ( prop.isChefsChoice ? 'visible' : 'hidden' ) }}/> 
                </Box>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}
