import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"

const Svg = styled.svg`
  fill: white;
  cursor: pointer;
`

const LinkedInIcon = ({ size }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 291.319 291.319"
    width={size}
    height={size}
    onClick={() => window.open("https://www.linkedin.com/in/aquib-vadsaria/")}
  >
    <g>
      <path
        style={{ fill: "white" }}
        d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66   S65.21,0,145.659,0z"
      />
      <path
        style={{ fill: "#081617" }}
        d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077   c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593   s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141   c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z"
      />
    </g>
  </Svg>
)

export default LinkedInIcon
