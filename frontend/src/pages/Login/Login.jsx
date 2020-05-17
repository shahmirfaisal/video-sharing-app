import React, { useEffect } from "react";
import { Heading } from "../../styled-components/Heading";
import { Form } from "../../styled-components/Form";
import { Input } from "../../components/Input/Input";
import { Button } from "../../styled-components/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/actions/actionCreators";
import { useHistory } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { Error } from "../../styled-components/Error";

const Login = ({ login, error, isAuth }) => {
  useEffect(() => {
    if (isAuth) history.replace("/");
  }, []);

  const history = useHistory();
  const [email, changeEmail, resetEmail] = useInput("");
  const [password, changePassword, resetPassword] = useInput("");

  const loginHandler = (e) => {
    e.preventDefault();
    login(email, password, history);
  };

  return (
    <section>
      <Heading>Login</Heading>

      <Error>{error}</Error>

      <Form onSubmit={loginHandler}>
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
          Login
        </Button>

        <Link to="/signup">
          <p style={{ marginTop: "1.2rem", textAlign: "center" }}>
            Don't have an account? Signup
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
    login: (email, password, history) =>
      dispatch(login(email, password, history)),
  };
};

const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginComponent as Login };
