import React from "react";
import { Card as AntCard } from "antd";
import styled from "styled-components";

const StyledCard = styled(AntCard)`
  padding: 24px 32px;
  max-width: 1080px;
  margin: 0 auto;
`;

export const Card = ({ children }: React.PropsWithChildren) => {
  return <StyledCard>{children}</StyledCard>;
};
