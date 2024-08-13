import React from "react";
import styled from "styled-components";
import { AuthCard } from "../../components/auth-card/auth-card";
import { Button, Form, Input, Typography } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import backgroundImage from "./../../assets/login-background.png";

const REQUIRED_MESSAGE = "Обязательно для заполнения";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  display: flex;
  background-position: center;
`;

interface LoginForm {
  login: string;
  password: string;
}

export const Login = (): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data);

  return (
    <Background>
      <AuthCard>
        <Form onFinish={handleSubmit(onSubmit)}>
          <Typography.Text>Заполните поля для входа</Typography.Text>
          <Form.Item>
            <Controller
              name="login"
              control={control}
              rules={{ required: { value: true, message: REQUIRED_MESSAGE } }}
              render={({ field }) => <Input {...field} placeholder="Email" />}
            />
          </Form.Item>
          <Form.Item>
            <Controller
              name="password"
              control={control}
              rules={{ required: { value: true, message: REQUIRED_MESSAGE } }}
              render={({ field }) => (
                <Input.Password {...field} placeholder="Пароль" />
              )}
            />
          </Form.Item>
          <Button type="link" size="large">
            Забыли пароль?
          </Button>
          <Button htmlType="submit" size="large" type="primary">
            Войти
          </Button>
        </Form>
      </AuthCard>
    </Background>
  );
};
