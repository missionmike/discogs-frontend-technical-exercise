import React from "react";
import styled from "@emotion/styled";

const LoaderEl = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  &::after {
    content: "Loading...";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 0.6rem;
    text-align: center;
    font-size: 0.6rem;
    color: $textLight;
    opacity: 0.8;
  }
`;

const Loader = () => {
  return (
    <LoaderEl>
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#aaa" />
          </filter>
        </defs>
        <circle
          id="loader"
          style={{
            fill: `transparent`,
            stroke: `#aaa`,
            strokeWidth: `5px`,
            strokeLinecap: `round`,
            filter: `url(#shadow)`,
          }}
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
    </LoaderEl>
  );
};

export { Loader };
