import { ILabel } from "../types/interfaces";
import React from "react";
import { Releases } from "../components";
import { apiResponseReleases } from "../data/apiResponseReleases";

const labelData: ILabel = {
  url: "https://www.discogs.com/label/245-R-S-Records",
  name: "R&S Records",
};

const Main = () => {
  return (
    <main>
      <Releases releasesData={apiResponseReleases} labelData={labelData} />
    </main>
  );
};

export { Main };
