import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function NotificationIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={27}
            viewBox="0 0 24 27"
            {...props}
        >
            <G transform="translate(-273.5 5)">
                <G transform="translate(273.5 2)">
                    <Path data-name="Rectangle 479" fill="none" d="M0 0H16V16H0z" />
                    <Path
                        data-name="Path 1"
                        d="M20.63 17.5h-6.884a2.644 2.644 0 01-2.754 2.5 2.644 2.644 0 01-2.754-2.5H1.353a1.307 1.307 0 01-1.239-.875 1.257 1.257 0 01.413-1.375 4.892 4.892 0 002.2-4V7.5C2.73 3.375 6.448 0 10.992 0s8.262 3.375 8.262 7.5v3.75a4.892 4.892 0 002.2 4 1.117 1.117 0 01.413 1.375 1.307 1.307 0 01-1.237.875z"
                        transform="translate(-.063)"
                        fill="#bebebe"
                        fillRule="evenodd"
                    />
                </G>
                <Circle
                    data-name="Ellipse 21"
                    cx={6}
                    cy={6}
                    r={6}
                    transform="translate(285.5 -5)"
                    fill="#d80073"
                />
            </G>
        </Svg>
    )
}

export default NotificationIcon
