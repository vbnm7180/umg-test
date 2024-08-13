import { Flex, Form, Input, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { AddButton } from "../../components/button-add/button-add";
import { Card } from "../../components/card/card";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

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
  padding: 16px 0;
`;

const StyledInput = styled(Input)`
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
`;

interface IFormInputs {
  vehicleId: string;
  createdDate: string;
}

const customizeRequiredMark = (
  label: React.ReactNode,
  { required }: { required: boolean }
) => (
  <>
    {label}
    {required && <span style={{ color: "red" }}>*</span>}
  </>
);

export const SdmCreateVehicle = (): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <PageWrapper vertical>
      <PageBackground>
        <Card>
          <PageSearchSection justify="space-between">
            <PageTitle>Добавить транспортное средство</PageTitle>
            <AddButton
              entityName="TC"
              onClick={handleSubmit(onSubmit)}
              htmlType="submit"
            />
          </PageSearchSection>
          <Form
            colon={false}
            requiredMark={customizeRequiredMark}
            labelCol={{
              style: { width: 230, display: "flex", alignItems: "center" },
            }}
            scrollToFirstError={false}
          >
            <PageTitle level={4}>Технические данные</PageTitle>
            <Form.Item
              label="Заводской номер изделия"
              required
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Controller
                name="vehicleId"
                control={control}
                rules={{ required: { value: true, message: "Required" } }}
                render={({ field }) => (
                  <StyledInput {...field} placeholder="Идентификатор ТС" />
                )}
              />
              {errors.vehicleId && (
                <p role="alert">{errors.vehicleId.message}</p>
              )}
            </Form.Item>
            <Form.Item
              label="Год выпуска"
              required
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Controller
                name="createdDate"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <StyledInput {...field} placeholder="Год выпуска" />
                )}
              />
            </Form.Item>
          </Form>
        </Card>
      </PageBackground>
    </PageWrapper>
  );
};
