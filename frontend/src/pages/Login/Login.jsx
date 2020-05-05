import React from "react";
import { Heading } from "../../styled-components/Heading";
import { Form } from "../../styled-components/Form";
import { Input } from "../../components/Input/Input";
import { Button } from "../../styled-components/Button";

export const Login = () => {
  return (
    <section>
      <Heading>Login</Heading>

      <Form>
        <Input type="email" placeholder="Email..." label="Email" id="email" />
        <Input
          type="password"
          placeholder="Password..."
          label="Password"
          id="password"
        />
        <Button margin="1.3rem 0 0 0" block>
          Login
        </Button>
      </Form>
    </section>
  );
};
