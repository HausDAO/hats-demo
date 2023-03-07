import { DataLg, DataXl } from "@daohaus/ui";
import React from "react";
import styled from "styled-components";
import hausBlockAnimated from "../assets/hats_icon.jpeg";

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  margin-bottom: 2rem;
  .img-block {
    display: flex;
    align-items: center;
    gap: 5rem;
  }
  img {
    height: 12rem;
    width: 12rem;
  }
`;

export const HausAnimated = () => {
  return (
    <ImageContainer>
      <div className="img-block">
        <img src="https://daohaus.mypinata.cloud/ipfs/QmZCxuFTg3Uy336y7NEdWNYWXfxMktYoZD1C2yii8w61yH" />
        <DataXl>&</DataXl>
        <img src={hausBlockAnimated} />
      </div>
    </ImageContainer>
  );
};
