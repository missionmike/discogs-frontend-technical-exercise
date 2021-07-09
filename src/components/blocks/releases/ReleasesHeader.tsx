import { ILabel, IRelease } from "../../../types/interfaces";

import React from "react";
import { ReleasesSort } from "./ReleasesSort";
import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`;

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
    <Header>
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
    </Header>
  );
};

export { ReleasesHeader };
