import { ILabel, IRelease } from "../../../types/interfaces";
import React, { useEffect, useState } from "react";

import { ReleasesCards } from "./ReleasesCards";
import { ReleasesHeader } from "./ReleasesHeader";
import styled from "@emotion/styled";

const ReleasesContainer = styled.section`
  max-width: 1024px;
  height: auto;
  background-color: #fff;
  margin: auto;
  padding: 1rem;
`;

const Releases = ({
  releasesData,
  labelData,
}: {
  releasesData: {
    releases: IRelease[];
  };
  labelData: ILabel;
}) => {
  const [releases, setReleases] = useState<IRelease[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setReleases(sortReleases({ releases: releasesData.releases }));
    }, 1500);
  }, []);

  useEffect(() => {
    console.log(releases);
  }, [releases]);

  return (
    <ReleasesContainer>
      <ReleasesHeader {...{ labelData, releases, setReleases }} />
      <ReleasesCards releases={releases} />
    </ReleasesContainer>
  );
};

const sortReleases = ({
  method = "name-az",
  releases,
}: {
  method?: string;
  releases: IRelease[];
}) => {
  switch (method) {
    case "name-az":
      releases.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "name-za":
      releases
        .sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        })
        .reverse();
      break;
  }
  console.log(method, releases);
  return releases;
};

export { Releases };
export { sortReleases };
