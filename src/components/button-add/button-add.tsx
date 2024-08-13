import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import styled from "styled-components";

type AddButtonProps = {
  entityName: string;
} & ButtonProps;

const StyledButton = styled(Button)`
  height: 40px;
`;

export const AddButton = ({ entityName, ...props }: AddButtonProps) => {
  return (
    <StyledButton {...props} type="primary" icon={<PlusOutlined />}>
      Добавить {entityName}
    </StyledButton>
  );
};
