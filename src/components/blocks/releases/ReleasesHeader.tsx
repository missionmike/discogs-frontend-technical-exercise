import { ILabel, IRelease } from "../../../types/interfaces";

import React from "react";
import { ReleasesHeaderContainer } from "./ReleasesStyledComponents";
import { ReleasesSort } from "./ReleasesSort";

const ReleasesHeader = ({
  labelData,
  releases,
  setReleases,
}: {
  labelData: ILabel;
  releases: IRelease[];
  setReleases: Function;
}) => {
  return (
    <ReleasesHeaderContainer>
      <h1>
        Releases from{" "}
        {/**
         * _blank, noopener and nofollow included below
         * to avoid any impact on analytics
         */}
        <a href={labelData.url} target="_blank" rel="noopener nofollow">
          {labelData.name}
        </a>
      </h1>
      <ReleasesSort {...{ releases, setReleases }} />
    </ReleasesHeaderContainer>
  );
};

export { ReleasesHeader };
