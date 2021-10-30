import React, { useState } from "react";
// Styling
import styled from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// Routing
import { Link } from "react-router-dom";
// Config
// import { API_URL } from "../config";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    // try {
    //   e.preventDefault();
    //   const req = await fetch(`${API_URL}/users/login`, {
    //     method: "POST",
    //     credentials: "include",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password,
    //     }),
    //   });
    //   const data = await req.json();
    //   console.log(data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <Modal>
      <h1>
        <FontAwesomeIcon icon={faUser} /> Login
      </h1>
      <Form onSubmit={submitHandler}>
        <InputBox>
          <FormLabel htmlFor="email">email</FormLabel>
          <FormField
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
            type="password"
            id="password"
            placeholder="SecuredPassword123"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
        <SubmitBtn>Login</SubmitBtn>
      </Form>
      <p>
        Forgot your password? <Link to="/forgot-password">Reset password</Link>
        <br />
        don't have an account? <Link to="/register">Register</Link>
      </p>
    </Modal>
  );
};

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

const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding: 6rem 4rem 3rem;
  width: 100%;
  max-width: 46rem;

  background-color: rgba(18, 16, 24, 0.6);
  border-radius: 4px;
  border: 1px solid #7f7597;

  h1 {
    display: inline-flex;
    align-items: center;
    gap: 2rem;

    font-size: 2.8rem;

    .fa-user {
      font-size: 4rem;
    }
  }

  p {
    font-size: 1.6rem;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.gold};
    }
  }
`;

export default LoginModal;
