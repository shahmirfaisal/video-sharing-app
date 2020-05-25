import React, { useEffect } from "react";
import { Heading } from "../../styled-components/Heading";
import { Form } from "../../styled-components/Form";
import { Input } from "../../components/Input/Input";
import { Button } from "../../styled-components/Button";
import { Link, useHistory } from "react-router-dom";
import { signup } from "../../store/actions/actionCreators";
import { useInput } from "../../hooks/useInput";
import { connect } from "react-redux";
import { Error } from "../../styled-components/Error";
import * as actions from "../../store/actions/actions";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Signup = ({ signup, error, isAuth, removeErrors }) => {
  useEffect(() => {
    if (isAuth) history.replace("/");
    return () => removeErrors();
  }, []);
  useDocumentTitle("Signup");

  const history = useHistory();
  const [name, changeName] = useInput("");
  const [email, changeEmail] = useInput("");
  const [password, changePassword] = useInput("");

  const signupHandler = (e) => {
    e.preventDefault();
    signup(name, email, password, history);
  };

  return (
    <section>
      <Heading>Signup</Heading>

      <Error>{error}</Error>

      <Form onSubmit={signupHandler}>
        <Input
          type="text"
          placeholder="Name..."
          label="Name"
          id="name"
          value={name}
          onChange={changeName}
        />

        <Input
          type="email"
          placeholder="Email..."
          label="Email"
          id="email"
          value={email}
          onChange={changeEmail}
        />

        <Input
          type="password"
          placeholder="Password..."
          label="Password"
          id="password"
          value={password}
          onChange={changePassword}
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

const mapStateToProps = (state) => {
  return {
    error: state.authError,
    isAuth: state.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (name, email, password, history) =>
      dispatch(signup(name, email, password, history)),
    removeErrors: () => dispatch({ type: actions.REMOVE_AUTH_ERROR }),
  };
};

const SignupComponent = connect(mapStateToProps, mapDispatchToProps)(Signup);

export { SignupComponent as Signup };
