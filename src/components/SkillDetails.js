import React, { useRef } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import Palette from "../palette"
import { NavigationNew } from "./navigation-new"
import { createHomeTimeLine } from "../timelines"
import { Home } from "./home"

const skillsContainerStyle = ({ background, isSmallScreen }) => css`
  display: flex;
  flex-direction: ${isSmallScreen ? "column" : "row"};
  padding: 5vh ${isSmallScreen ? "10vw" : "5vw"};
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${background};
  overflow: hidden;
  // scroll-snap-align: start;
`

const headerStyle = ({ isSmallScreen }) => css`
  align-self: flex-start;
  font-weight: bold;
  height: ${isSmallScreen ? "auto" : "100%"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-transform: uppercase;
`

const SkillImage = styled.img`
  align-self: center;
  justify-content: center;
  width: ${({ isSmallScreen }) => (isSmallScreen ? "80vw" : "45vw")};
  height: ${({ isSmallScreen }) => (isSmallScreen ? "37vh" : "50vh")};
  margin: 0;
`

export const SkillDetails = ({
  containerId,
  headerId,
  imgId,
  imgSrc,
  header,
  background,
  headerClassName,
}) => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const homeTimeLine = useRef(createHomeTimeLine(containerId))
  return (
    <div
      id={containerId}
      css={skillsContainerStyle({ background, isSmallScreen })}
    >
      <Home
        overlay={true}
        homeTimeLine={homeTimeLine.current}
        parentId={containerId}
      />
      <NavigationNew
        inView={"Skills"}
        color={containerId.includes("system") ? Palette.DARK : Palette.LIGHT}
        homeTimeLine={homeTimeLine.current}
        parentId={containerId}
      />
      <header
        id={headerId}
        css={[headerStyle({ isSmallScreen }), headerClassName]}
        data-splitting="chars"
      >
        {header.split(" ").map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </header>
      <SkillImage
        id={imgId}
        src={imgSrc}
        alt={header}
        isSmallScreen={isSmallScreen}
      />
    </div>
  )
}
