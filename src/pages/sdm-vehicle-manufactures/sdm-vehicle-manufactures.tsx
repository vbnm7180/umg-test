import { Flex, Select, Table, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import {
  selectorOptions,
  vehicleManufacturesColumns,
  vehicleManufacturesData,
} from "./sdm-vehicle-manufactures.model";
import { DownOutlined } from "@ant-design/icons";
import { AddButton } from "../../components/button-add/button-add";
import { Card } from "../../components/card/card";
import { Search } from "../../components/search/search";
import { useNavigate } from "react-router";

const PageBackground = styled.div`
  background-color: #e6e6e6;
  padding: 24px;
  flex-grow: 1;
`;

const PageWrapper = styled(Flex)`
  height: 100vh;
`;

const PageTitle = styled(Typography.Title)`
  font-size: 32px;
  margin: 0;
`;

const PageSearchSection = styled(Flex)`
  justify-content: space-between;
  padding: 16px 0;
`;

const FilterSelect = styled(Select)`
  width: 220px;
`;

const SearchSelect = styled(Select)`
  width: 220px;
`;

const VehicleTable = styled(Table)`
  border-top: 1px solid #f0f0f0;
`;

const DownIconOrange = styled(DownOutlined)`
  color: #dd6a35;
`;

export const SdmVehicleManufactures = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <PageWrapper vertical>
      <PageBackground>
        <Card>
          <PageTitle>Транспортные средства</PageTitle>
          <PageSearchSection>
            <Flex gap={16}>
              <FilterSelect
                suffixIcon={<DownIconOrange />}
                dropdownStyle={{ width: 345 }}
                placeholder={"Фильтр"}
                onChange={() => {}}
                options={selectorOptions}
              />
              <SearchSelect
                suffixIcon={<DownIconOrange />}
                dropdownStyle={{ width: 345 }}
                placeholder={"Поиск"}
                onChange={() => {}}
                options={selectorOptions}
              />
              <Search onSearch={() => {}} />
            </Flex>
            <AddButton
              entityName="TC"
              onClick={() => {
                navigate("/create-vehicle");
              }}
            />
          </PageSearchSection>
          <VehicleTable
            pagination={false}
            virtual
            scroll={{ y: 400 }}
            columns={vehicleManufacturesColumns}
            dataSource={vehicleManufacturesData}
          />
        </Card>
      </PageBackground>
    </PageWrapper>
  );
};
