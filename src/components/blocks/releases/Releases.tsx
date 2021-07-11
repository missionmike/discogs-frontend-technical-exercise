import { ILabel, IRelease } from "../../../types/interfaces";
import React, { useEffect, useState } from "react";
import {
  sortArrayByObjectKeyAscending,
  sortArrayByObjectKeyDescending,
} from "../../../helpers/utilities";

import { ReleasesCards } from "./ReleasesCards";
import { ReleasesContainer } from "./ReleasesStyledComponents";
import { ReleasesHeader } from "./ReleasesHeader";

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

  /**
   * Delay initial dummy data loading to simulate a fetch
   */
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
  sortMethod = "name-az",
  releases,
}: {
  sortMethod?: string;
  releases: IRelease[];
}) => {
  switch (sortMethod) {
    case "name-az":
      releases = sortArrayByObjectKeyAscending(releases, "title");
      break;
    case "name-za":
      releases = sortArrayByObjectKeyDescending(releases, "title");
      break;
    case "artist-az":
      releases = sortArrayByObjectKeyAscending(releases, "artist");
      break;
    case "artist-za":
      releases = sortArrayByObjectKeyDescending(releases, "artist");
      break;
    case "year-oldest":
      releases = sortArrayByObjectKeyAscending(releases, "year");
      break;
    case "year-newest":
      releases = sortArrayByObjectKeyDescending(releases, "year");
      break;
  }
  return releases;
};

export { Releases };
export { sortReleases };
