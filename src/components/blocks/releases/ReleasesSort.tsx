import { IRelease } from "../../../types/interfaces";
import React from "react";
import { sortReleases } from "./Releases";

const ReleasesSort = ({
  releases,
  setReleases,
}: {
  releases: IRelease[];
  setReleases: Function;
}) => {
  const onChange = (e) => {
    let method = e?.target?.value;
    method && setReleases([...sortReleases({ method, releases })]);
  };

  return (
    <div className="form-field">
      <label htmlFor="sort">Sort by Release Year, A-Z:</label>
      <select id="sort" onChange={onChange}>
        <option value="" disabled>
          Sort by Year, A-Z
        </option>
        <option value="name-az">Release Name, A-Z</option>
        <option value="name-za">Release Name, Z-A</option>
        <option value="artist-az">Artist Name, A-Z</option>
        <option value="artist-za">Artist Name, Z-A</option>
        <option value="year-oldest">Release Year, Oldest First</option>
        <option value="year-newest">Release Year, Newest First</option>
      </select>
    </div>
  );
};

export { ReleasesSort };
