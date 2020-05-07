import React from "react";
import { Heading } from "../../styled-components/Heading";
import { Form } from "../../styled-components/Form";
import { Input } from "../../components/Input/Input";
import { Button } from "../../styled-components/Button";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <section>
      <Heading>Signup</Heading>

      <Form>
        <Input type="text" placeholder="Name..." label="Name" id="name" />
        <Input type="email" placeholder="Email..." label="Email" id="email" />
        <Input
          type="password"
          placeholder="Password..."
          label="Password"
          id="password"
        />
        <Button margin="1.3rem 0 0 0" block>
          Signup
        </Button>

        <Link to="/login">
          <p style={{ marginTop: "1.2rem", textAlign: "center" }}>
            Already have an account? Login
          </p>
        </Link>
      </Form>
    </section>
  );
};
