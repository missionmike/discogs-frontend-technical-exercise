import { motion } from "framer-motion";
import styled from "@emotion/styled";

const ReleasesContainer = styled.section`
  max-width: 1024px;
  height: auto;
  background-color: #fff;
  margin: auto;
  padding: 1rem;
`;

const ReleasesCardsContainer = styled(motion.section)`
  display: grid;
  min-height: 100%;
  padding: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem 1rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const ReleasesCard = styled(motion.div)`
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

const ReleasesCardCaption = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 200ms ease;

  div {
    padding: 0.5rem 0.2rem;
  }

  p {
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1.1rem;
  }
`;

const ReleasesHeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 1rem 1rem 1rem;

  @media screen and (max-width: 650px) {
    flex-direction: column;

    h1 {
      margin-bottom: 2rem;
    }

    select {
      width: 100%;
    }
  }
`;

export {
  ReleasesContainer,
  ReleasesCardsContainer,
  ReleasesCard,
  ReleasesCardCaption,
  ReleasesHeaderContainer,
};
