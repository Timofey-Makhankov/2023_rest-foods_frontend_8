import { SvgIcon, SvgIconProps } from '@mui/material'
import { ReactComponent as Icon } from '../../assets/chef-hat-chef-svgrepo-com.svg'

export default function ChefIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
        <Icon/>
    </SvgIcon>
  )
}
