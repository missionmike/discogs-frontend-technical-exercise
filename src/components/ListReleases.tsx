import React, { useEffect, useState } from "react";

import { Sort } from "./Sort";
import { apiResponseReleases } from "../data/apiResponseReleases";
import styled from "@emotion/styled";

const ListReleases = () => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    setReleases(apiResponseReleases.releases);
  }, []);

  useEffect(() => {
    console.log(releases);
  }, [releases]);

  return (
    <div>
      <header>
        <h1>
          Releases from{" "}
          <a
            href="https://www.discogs.com/label/245-R-S-Records"
            target="_blank"
            rel="noopener nofollow"
          >
            R&amp;S Records
          </a>
        </h1>{" "}
        <Sort />
      </header>
      <div className="releases">
        <div>
          <div id="cards" className="loading"></div>
        </div>{" "}
      </div>
    </div>
  );
};

export { ListReleases };
