import { SvgIcon, SvgIconProps } from '@mui/material'
import { ReactComponent as Icon } from '../../assets/chef-hat-chef-svgrepo-com.svg'

/**
 * Chef Icon inside a SvgIcon Wrapper
 * @param props The default SVGIconProps from the Mui SvgIcon Component
 * @returns a SvgIconProp with a Chef Icon
 * @author Timofey Makhankov
 * @copyright 2023
 */
export default function ChefIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
        <Icon/>
    </SvgIcon>
  )
}
