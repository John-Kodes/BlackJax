/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
// Components
import Modal from "./Modal";
import Loading, { LoadingContainer } from "./loadingEl";
// Context
import AuthContext from "../AuthContext";
// Styling
import styled from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
// Routing
import { Redirect } from "react-router";
import { Link, useParams } from "react-router-dom";

const ResetPasswordModal = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { resetToken } = useParams();
  console.log(resetToken);

  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // await login(email, password);
    setIsLoading(false);
  };

  return (
    <Modal>
      {user && <Redirect to="/" />}
      <h1>
        <FontAwesomeIcon icon={faUndoAlt} /> Set New Password
        {isLoading && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}
      </h1>
      <Form onSubmit={submitHandler}>
        <InputBox>
          <FormLabel htmlFor="password">new password</FormLabel>
          <FormField
            type="password"
            id="password"
            placeholder="SecuredPassword123"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <FormLabel htmlFor="passwordConfirm">confirm password</FormLabel>
          <FormField
            type="password"
            id="passwordConfirm"
            placeholder="SecuredPassword123"
            required
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </InputBox>
        <SubmitBtn type="submit" disabled={isLoading}>
          Submit
        </SubmitBtn>
      </Form>
      <p>
        Wanna try logging in again? <Link to="/login">Login</Link>
      </p>
    </Modal>
  );
};

const SubmitBtn = styled.button`
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.gold};

  transition: all 0.2s;

  &:hover,
  &:focus {
    filter: brightness(130%);
  }
  &:active {
    filter: brightness(90%);
  }
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

export default ResetPasswordModal;
