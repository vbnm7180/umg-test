import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 480px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AuthCard = ({ children }: React.PropsWithChildren) => {
  return (
    <StyledCard
      styles={{
        body: {
          padding: "40px 40px 24px 40px",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {children}
    </StyledCard>
  );
};
