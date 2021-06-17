import React from "react";
import { SocialIcon } from "react-social-icons";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Socials = styled.div`
  display: flex;
  align-items: center;
`;

export const RobinCard = ({
  picSrc = "../images/default.png",
  occupation = "N/A",
  location = "N/A",
  socials = [],
}: {
  picSrc: string;
  occupation?: string;
  location?: string;
  socials?: string[];
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
      <div>{occupation}</div>
      <div>{location}</div>
      <Socials>
        {socials.map((url) => (
          <SocialIcon
            style={{ width: 32, height: 32, marginRight: 4 }}
            url={url}
          />
        ))}
      </Socials>
    </div>
  );
};
