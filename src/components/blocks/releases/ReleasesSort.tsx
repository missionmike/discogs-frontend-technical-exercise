import {
  sortArrayByObjectKeyAscending,
  sortArrayByObjectKeyDescending,
} from "../../../helpers/utilities";

import { IRelease } from "../../../types/interfaces";
import React from "react";

const ReleasesSort = ({
  releases,
  setReleases,
}: {
  releases: IRelease[];
  setReleases: Function;
}) => {
  const onChange = (e) => {
    let sort =
        e?.target?.selectedOptions[0].getAttribute("data-sort") === "descending"
          ? sortArrayByObjectKeyDescending
          : sortArrayByObjectKeyAscending,
      key = e?.target?.selectedOptions[0].getAttribute("data-key");

    key && setReleases([...sort(releases, key)]);

    document && document.body.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="form-field">
      <label htmlFor="sort">Sort by Release Year, A-Z:</label>
      <select id="sort" onChange={onChange}>
        <option value="" disabled>
          Sort by Year, A-Z
        </option>
        <option value="title-az" data-sort="ascending" data-key="title">
          Release Title, A-Z
        </option>
        <option value="title-za" data-sort="descending" data-key="title">
          Release Title, Z-A
        </option>
        <option value="artist-az" data-sort="ascending" data-key="artist">
          Artist Name, A-Z
        </option>
        <option value="artist-za" data-sort="descending" data-key="artist">
          Artist Name, Z-A
        </option>
        <option value="year-oldest" data-sort="ascending" data-key="year">
          Release Year, Oldest First
        </option>
        <option value="year-newest" data-sort="descending" data-key="year">
          Release Year, Newest First
        </option>
      </select>
    </div>
  );
};

export { ReleasesSort };
