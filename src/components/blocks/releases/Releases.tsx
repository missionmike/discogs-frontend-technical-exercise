import { ILabel, IRelease } from "../../../types/interfaces";
import React, { useEffect, useState } from "react";

import { ReleasesCards } from "./ReleasesCards";
import { ReleasesContainer } from "./ReleasesStyledComponents";
import { ReleasesHeader } from "./ReleasesHeader";
import { sortArrayByObjectKeyAscending } from "../../../helpers/utilities";

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
      setReleases(
        sortArrayByObjectKeyAscending(releasesData.releases, "title")
      );
    }, 1500);
  }, []);

  return (
    <ReleasesContainer>
      <ReleasesHeader {...{ labelData, releases, setReleases }} />
      <ReleasesCards {...{ releases }} />
    </ReleasesContainer>
  );
};

export { Releases };
