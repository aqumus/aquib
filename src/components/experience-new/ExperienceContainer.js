import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { Description } from "./Description"
import { Company } from "./Company"
import { Designation } from "./Designation"
import { Duration } from "./Duration"
import { TechnologyUsed } from "./TechnologyUsed"
import { ExperienceContext } from "./ExperienceContext"
import { NavigationNew } from "../navigation-new"
import Palette from "../../palette"

const experienceContainerStyle = ({ background, color }) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${background};
  color: ${color};
  scroll-snap-align: start;
`

const sectionStyle = ({ background, color, isSmallScreen }) => css`
  width: 70%;
  height: 65%;
  position: relative;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${isSmallScreen ? "5vh 0 0 0" : "5vh 0"};
  background: ${background};
  color: ${color};
`

const experienceTitleStyle = isSmallScreen => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${isSmallScreen ? "7vh" : "6vh"};
`

const experienceHeaderStyle = css`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`

export const ExperienceContainer = ({
  background,
  secondBackground,
  color,
  duration,
  company,
  companyFirstHalf,
  designation,
  designationFirstHalf,
  renderDescription,
  technologyUsed,
}) => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <ExperienceContext.Provider
      value={{
        background,
        secondBackground,
        color,
      }}
    >
      <div css={experienceContainerStyle({ background, color })}>
        <NavigationNew inView={"Experience"} color={Palette.LIGHT} />
        <section
          css={sectionStyle({
            color,
            background: secondBackground,
            isSmallScreen,
          })}
        >
          <div css={experienceTitleStyle(isSmallScreen)}>
            <div css={experienceHeaderStyle}>
              <Company firstHalf={companyFirstHalf}>{company}</Company>
              <Designation firstHalf={designationFirstHalf}>
                {designation}
              </Designation>
            </div>
            <Duration>{duration}</Duration>
          </div>
          <Description renderDescription={renderDescription} />
        </section>
        <TechnologyUsed>{technologyUsed}</TechnologyUsed>
      </div>
    </ExperienceContext.Provider>
  )
}
