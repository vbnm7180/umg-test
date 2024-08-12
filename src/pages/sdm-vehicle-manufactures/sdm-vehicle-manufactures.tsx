import { Button, Card, Flex, Input, Select, Table, Typography } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import styled from "styled-components";
import {
  selectorOptions,
  vehicleManufacturesColumns,
  vehicleManufacturesData,
} from "./sdm-vehicle-manufactures.model";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";

const PageBackground = styled.div`
  background-color: #e6e6e6;
  padding: 24px;
  flex-grow: 1;
`;

const PageWrapper = styled(Flex)`
  height: 100vh;
`;

const PageCard = styled(Card)`
  padding: 24px 32px;
  max-width: 1080px;
  margin: 0 auto;
`;

// const SearchRow = styled(Flex)`
//   padding: 16px 0;
// `;

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

const SearchField = styled(Input.Search)`
  width: 320px;
`;

const AddVehicleButton = styled(Button)`
  height: 40px;
`;

const VehicleTable = styled(Table)`
  border-top: 1px solid #f0f0f0;
`;

const DownIconOrange = styled(DownOutlined)`
  color: #dd6a35;
`;

// const PageHeader = styled(Text)`
//   border-radius: 8px;
//   background-color: white;
//   padding: 24px 32px;
// `;

export const SdmVehicleManufactures = (): JSX.Element => {
  return (
    <PageWrapper vertical>
      <PageBackground>
        {/* <Card>
      <p className="ant-card-meta-description">Description</p>
      </Card> */}
        <PageCard>
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
              <SearchField
                enterButton
                placeholder="Введите поисковый запрос"
                onSearch={() => {}}
              />
            </Flex>
            <AddVehicleButton type="primary" icon={<PlusOutlined />}>
              Добавить ТС
            </AddVehicleButton>
          </PageSearchSection>
          <VehicleTable
            pagination={false}
            virtual
            scroll={{ y: 812 }}
            columns={vehicleManufacturesColumns}
            dataSource={vehicleManufacturesData}
          />
        </PageCard>
      </PageBackground>
    </PageWrapper>
  );
};
