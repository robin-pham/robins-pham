import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const RobinCard = ({
  picSrc = "../images/default.png",
  occupation = "N/A",
  location = "N/A",
}) => {
  return (
    <div
      style={{
        textOverflow: "clip",
        width: 150,
      }}
    >
      <StaticImage
        alt="A grey user avatar"
        src="../images/default.png"
        quality={95}
        formats={["auto", "webp", "avif"]}
        style={{ marginBottom: `1.45rem` }}
        width={150}
      />
      <img src="" alt="" />
      <div>{occupation}</div>
      <div>{location}</div>
    </div>
  )
}
