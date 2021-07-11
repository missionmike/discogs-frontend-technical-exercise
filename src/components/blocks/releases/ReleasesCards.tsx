import { AnimatePresence, motion } from "framer-motion";
import {
  ReleasesCard,
  ReleasesCardCaption,
  ReleasesCardsContainer,
} from "./ReleasesStyledComponents";

import { IRelease } from "../../../types/interfaces";
import { Loader } from "../../../components";
import React from "react";

const ReleasesCards = ({ releases }: { releases: IRelease[] }) => {
  return (
    <AnimatePresence>
      <ReleasesCardsContainer>
        {releases.length < 1 && <Loader />}
        {releases.map((release, index) => {
          /**
           * randomKey is needed as a workaround for this issue:
           * @link https://github.com/framer/motion/issues/968
           */
          let randomKey = Math.round(Math.random() * 10000);

          return (
            <ReleasesCard
              key={`release-card-${index}-${randomKey}`}
              animate={{ opacity: 1, translateY: 0 }}
              initial={{
                opacity: 0,
                translateY: 20,
              }}
              transition={{ delay: index * 0.05 }}
            >
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
                <ReleasesCardCaption className="card-caption">
                  <div>
                    <p>
                      <strong>{release.title}</strong>
                      <br />
                      {release.artist} ({release.year})
                      <br />
                      <span style={{ fontSize: `0.8em` }}>
                        <em>#{release.catno.replace("#", "")}</em>
                      </span>
                    </p>
                  </div>
                </ReleasesCardCaption>
              </a>
            </ReleasesCard>
          );
        })}
      </ReleasesCardsContainer>
    </AnimatePresence>
  );
};

export { ReleasesCards };
