import * as React from "react";
import { RobinCard } from "../components/RobinCard";
import { DEFAULT_NAME } from "../constants";
import { RobinData } from "../types";

const CardLayout: React.FC = ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-evenly",
    }}
  >
    {children}
  </div>
);

const robinData = [
  {
    id: "blah",
    name: DEFAULT_NAME,
    occupation: "Software Developer",
    location: "San Francisco, CA, USA",
    socials: [
      "https://www.github.com/robin-pham?tab=repositories",
      "https://www.linkedin.com/in/robin-pham/",
    ],
  },
  {
    id: "bloh",
    name: DEFAULT_NAME,
    occupation: "UI/UX Designer | Product Designer",
    location: "Atlanta, Georgia, USA",
  },
] as RobinData[];

export const Robins: React.FC = () => {
  return (
    <CardLayout>
      {robinData.map((data) => (
        <RobinCard key={data.id} {...data} />
      ))}
    </CardLayout>
  );
};

export default Robins;
