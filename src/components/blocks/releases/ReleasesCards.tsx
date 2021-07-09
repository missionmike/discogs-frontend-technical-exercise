import { IRelease } from "../../../types/interfaces";
import { Loader } from "../../../components";
import React from "react";
import styled from "@emotion/styled";

const CardsContainer = styled.section`
  display: grid;
  min-height: 100%;
  padding: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem 1rem;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  background: black;

  a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    transition: all 500ms ease;
    transform: scale(1);
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    .card-caption {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const CardCaption = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr;
  gap: 0.5rem 0.5rem;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(100%);
  opacity: 0;
  transition: all 200ms ease;

  div {
    padding: 0.5rem;
  }

  p {
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1.1rem;
  }
`;

const ReleasesCards = ({ releases }: { releases: IRelease[] }) => {
  return (
    <CardsContainer>
      {releases.length < 1 && <Loader />}
      {releases.map((release, index) => {
        return (
          <Card key={`release-card-${index}`}>
            {/**
             * _blank, noopener and nofollow included below
             * to avoid any impact on analytics
             */}
            <a
              href={`https://www.discogs.com/release/${release.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={release.thumb}
                alt={`Album cover art for ${release.artist}, ${release.title}`}
              />
              <CardCaption className="card-caption">
                <div>
                  <p>
                    <strong>{release.title}</strong>
                    <br />
                    {release.artist}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>{release.year}</strong>
                    <br />
                    {release.catno}
                  </p>
                </div>
              </CardCaption>
            </a>
          </Card>
        );
      })}
    </CardsContainer>
  );
};

export { ReleasesCards };
