import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

function ForwardIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
            {...props}
        >
            <Defs>
                <ClipPath id="a">
                    <Path fill="none" d="M0 0H10V10H0z" />
                </ClipPath>
            </Defs>
            <G data-name="Forward arrow small" clipPath="url(#a)">
                <Path
                    data-name="Path 36"
                    d="M6.7 8.1L2 3.4 3.4 2l3.3 3.3L10 2l1.4 1.4z"
                    transform="rotate(-90 5.7 5.7)"
                    fill="#bebebe"
                />
                <Path data-name="Rectangle 1465" fill="none" d="M0 0H10V10H0z" />
            </G>
        </Svg>
    )
}

export default ForwardIcon
