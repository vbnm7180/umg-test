import React from "react";
import { Input } from "antd";
import styled from "styled-components";
import { SearchProps } from "antd/es/input";

const StyledSearch = styled(Input.Search)`
  width: 320px;
`;

export const Search = ({ ...props }: SearchProps) => {
  return (
    <StyledSearch
      {...props}
      enterButton
      placeholder="Введите поисковый запрос"
    />
  );
};
