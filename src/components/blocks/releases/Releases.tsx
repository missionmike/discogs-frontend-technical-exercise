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

  return (
    <ReleasesContainer>
      <ReleasesHeader {...{ labelData, releases, setReleases }} />
      <ReleasesCards {...{ releases }} />
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
  function ascending(a: string | number, b: string | number) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  switch (method) {
    case "name-az":
      releases.sort(function (a, b) {
        return ascending(a.title, b.title);
      });
      break;
    case "name-za":
      releases
        .sort(function (a, b) {
          return ascending(a.title, b.title);
        })
        .reverse();
      break;
    case "artist-az":
      releases.sort(function (a, b) {
        return ascending(a.artist, b.artist);
      });
      break;
    case "artist-za":
      releases
        .sort(function (a, b) {
          return ascending(a.artist, b.artist);
        })
        .reverse();
      break;
    case "year-oldest":
      releases.sort(function (a, b) {
        return ascending(a.year, b.year);
      });
      break;
    case "year-newest":
      releases
        .sort(function (a, b) {
          return ascending(a.year, b.year);
        })
        .reverse();
      break;
  }
  return releases;
};

export { Releases };
export { sortReleases };
