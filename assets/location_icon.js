import * as React from "react"
import Svg, { Defs, ClipPath, Path, G, Text, TSpan } from "react-native-svg"

function LocationIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={122.947}
      height={34}
      viewBox="0 0 122.947 34"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path
            data-name="Path 20145"
            d="M108.075-734H28a17 17 0 00-17 17 17 17 0 0017 17h95.825a10.121 10.121 0 0010.121-10.121 10.121 10.121 0 00-2.7-6.879l-10.7-11.554A17 17 0 00108.075-734z"
            fill="none"
            clipRule="evenodd"
          />
        </ClipPath>
        <ClipPath id="b">
          <Path data-name="Path 20144" d="M0 0h375v-792H0z" fill="none" />
        </ClipPath>
        <ClipPath id="c">
          <Path
            data-name="Path 20148"
            d="M27-721a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-.586-1.414A2 2 0 0027-721zm0 3a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1z"
            fill="none"
          />
        </ClipPath>
        <ClipPath id="d">
          <Path
            data-name="Path 20151"
            d="M27-725a6.122 6.122 0 00-6 6.237c0 5.335 5.455 9.366 5.689 9.536L27-709l.311-.227c.235-.17 5.689-4.2 5.689-9.536A6.122 6.122 0 0027-725zm0 14.6c-1.129-.919-4.909-4.309-4.909-8.363a5.009 5.009 0 014.909-5.1 5.009 5.009 0 014.909 5.1c0 4.054-3.78 7.444-4.909 8.363z"
            fill="none"
          />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)" transform="translate(-11 734)">
        <G data-name="Group 16050" clipPath="url(#b)">
          <Path
            data-name="Path 20143"
            d="M138.947-739H6v44h132.947z"
            fill="#d80073"
          />
        </G>
      </G>
      <G data-name="Oxford Street">
        <G
          data-name="Group 16053"
          clipPath="url(#c)"
          transform="translate(-11 734) translate(6)"
        >
          <G data-name="Group 16052" clipPath="url(#b)">
            <Path data-name="Path 20146" d="M20-726h14v14H20z" fill="#fff" />
          </G>
        </G>
        <G
          data-name="Group 16055"
          clipPath="url(#d)"
          transform="translate(-11 734) translate(6)"
        >
          <G data-name="Group 16054" clipPath="url(#b)">
            <Path data-name="Path 20149" d="M16-730h22v26H16z" fill="#fff" />
          </G>
        </G>
        <Text
          data-name="Oxford Street"
          transform="translate(-11 734) translate(6) translate(40 -712)"
          fill="#fff"
          fontSize={12}
          fontFamily="Cairo-SemiBold, Cairo"
          fontWeight={600}
          letterSpacing="0.029em"
        >
          <TSpan x={0} y={0}>
            {"Oxford Street"}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}

export default LocationIcon
