import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

const navigationContainerPage = css`
  height: 90vh;
  width: 3vw;
`

const navigationContainerIndex = css`
  height: 90vh;
  width: 18vw;
`

const navPage = css`
  position: relative;
  top: -5vh;
  left: -2vw;
  flex-direction: row-reverse;
  transform: rotate(270deg) translate(20px, -40px);
  a {
    &&:nth-of-type(even) {
      padding: 0 2vh;
    }
    &&:hover {
      padding-top: 5px;
    }
  }
`

const navIndex = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 700px;
  align-items: flex-end;
  height: 17vh;
    a {
      font-size: 2.6vw;
      display: block;
      line-height: 5vh;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: transparent;
      text-shadow: 0px 0px 4px white;
      transition: all 0.2s ease-in-out;
      :hover {
        text-shadow: 0px 0px 1px white;
        padding-right: 5px;
      }
    }
  }
  &:hover a:not(:hover) {
    text-shadow: 0px 0px 6px white;
  }
`

const linkActiveStyle = {
  textShadow: "0px 0px 1px white",
  paddingRight: "5px",
}

const links = [
  {
    to: "/about",
    text: "About",
  },
  {
    to: "/skills",
    text: "Skills",
  },
  {
    to: "/experience",
    text: "Experience",
  },
]

const Navigation = ({ page }) => (
  <div css={[navigationContainerIndex, page && navigationContainerPage]}>
    <nav css={[navIndex, page && navPage]}>
      {links.map(({ to, text }, i) => (
        <Link key={i} to={to} activeStyle={linkActiveStyle}>
          {text}
        </Link>
      ))}
    </nav>
  </div>
)

export default Navigation
