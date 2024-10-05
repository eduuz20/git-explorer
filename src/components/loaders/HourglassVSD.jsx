import {CirclesWithBar} from 'react-loader-spinner'

import { useTheme } from 'styled-components'

export const CirclesVSD = () => {
  const theme = useTheme()
  return (
    <CirclesWithBar
  height="100"
  width="100"
  color={[theme.primary]}
  outerCircleColor={[theme.primary]}
  innerCircleColor={[theme.primary]}
  barColor={[theme.primary]}
  ariaLabel="circles-with-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  )
}