/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// Components
import Modal from "./Modal";
// Styling
import styled from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
// Routing
import { Link } from "react-router-dom";
// Config
// import { API_URL } from "../config";

const ForgotPasswordModal = () => {
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    // try {
    //   e.preventDefault();
    //   const req = await fetch(`${API_URL}/users/forgotPassword`, {
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
        <FontAwesomeIcon icon={faQuestion} /> Reset Password
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
        <p>
          An email will be sent to your email account with a link where you can
          reset your password.
        </p>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
      <p>
        Wanna go back to the login page? <Link to="/login">Login</Link>
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

export default ForgotPasswordModal;
