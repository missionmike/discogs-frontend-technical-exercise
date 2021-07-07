import React from "react";

const Sort = () => {
  return (
    <div className="sort-container">
      <select id="sort">
        <option value="name">Name</option>
        <option value="year">Release Year</option>
      </select>
    </div>
  );
};

export { Sort };
