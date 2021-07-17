import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MenuIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={18}
      viewBox="0 0 24 18"
      {...props}
    >
      <Path
        d="M-6160 17v-2.25h24V17zm0-7.875v-2.25h24v2.25zm0-7.875V-1h24v2.25z"
        transform="translate(6160 1)"
        fill="#bebebe"
      />
    </Svg>
  )
}

export default MenuIcon