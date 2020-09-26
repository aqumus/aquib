import SEO from "./seo"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { FrontEndSkills } from "./FrontEndSkills"
import { BackEndSkills } from "./BackendSkills"
import { SystemSkills } from "./SystemSkills"

const skillsDetailsContainer = css`
  height: 100%;
  width: 100%;
  position: relative;
`
const skillsDetails = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100vw;
`

export function SkillsNew() {
  return (
    <div css={skillsDetailsContainer} id="my-skills">
      <SEO
        title="Aquib Vadsaria Skills"
        description="List of Aquib Vadsaria FrontEnd Skill, Backend and cloud skills, System skills"
      />
      <div css={skillsDetails}>
        <FrontEndSkills />
        <BackEndSkills />
        <SystemSkills />
      </div>
    </div>
  )
}
