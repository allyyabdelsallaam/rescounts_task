import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RateIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={15.2}
            viewBox="0 0 16 15.2"
            {...props}
        >
            <Path
                d="M8 0l2.5 5 5.5.8-4 3.9.9 5.5L8 12.6l-4.9 2.6.9-5.5-4-3.9L5.5 5z"
                fill="#e9d023"
            />
        </Svg>
    )
}

export default RateIcon
