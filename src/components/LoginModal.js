import React, { useState, useContext } from "react";
import { Router } from "react-router";
// Components
import Modal from "./Modal";
import Loading from "./loadingEl";
// Context
import AuthContext from "../AuthContext";
// Styling
import styled from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// Routing
import { Link } from "react-router-dom";

const LoginModal = () => {
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("password1234");

  const { login } = useContext(AuthContext);

  const submitHandler = async (e) => {
    // TODO: Implement loading element
    e.preventDefault();
    console.log("loading...");
    await login(email, password);
    console.log("you're logged in!");
  };

  return (
    <Modal>
      <h1>
        <FontAwesomeIcon icon={faUser} /> Login
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      </h1>
      <Form onSubmit={submitHandler}>
        <InputBox>
          <FormLabel htmlFor="email">email</FormLabel>
          <FormField
            defaultValue={"user@gmail.com"}
            type="email"
            id="email"
            placeholder="johndoe@email.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <FormLabel htmlFor="password">password</FormLabel>
          <FormField
            defaultValue={"password1234"}
            type="password"
            id="password"
            placeholder="SecuredPassword123"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
        <SubmitBtn type="submit">Login</SubmitBtn>
      </Form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
        <br />
        Forgot your password? <Link to="/forgot-password">Reset password</Link>
      </p>
    </Modal>
  );
};
const LoadingContainer = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;
`;

const SubmitBtn = styled.button`
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.gold};
`;

const FormField = styled.input`
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif;
  color: white;

  background-color: transparent;
  padding: 0.8rem 1rem;
  border: 1px solid #fff;
  border-radius: 4px;

  transition: border 0.5s;
  outline: none;
  &::placeholder {
    color: #a59eb8;
  }

  &:invalid {
    border: 1px solid hsl(345, 100%, 50%);
  }

  &:valid {
    border: 1px solid #00ffbf;
  }

  &:not(:focus) {
    border: 1px solid #7f7597;
  }
`;

const FormLabel = styled.label`
  font-weight: 600;
  font-size: 2.2rem;

  text-transform: uppercase;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 2.8rem;
`;

export default LoginModal;
