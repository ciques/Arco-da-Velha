import React from "react";

import { Wrapper } from "./styles";

import { ClipLoader } from "react-spinners";

export default function Loading({ isLoading }) {
  return (
    <Wrapper>
      <ClipLoader
        size={80}
        sizeUnit={"px"}
        color={"#00ded8"}
        loading={isLoading}
      />
    </Wrapper>
  );
}
