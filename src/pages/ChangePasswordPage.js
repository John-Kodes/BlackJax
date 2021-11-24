import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
// Components
import BasePage from "../components/BasePage";
import Modal from "../components/Modal";
import ErrorModal from "../components/ErrorModal";
// Context
// import AuthContext from "../AuthContext";
// Styling
import styled from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
// // Util
// import { colorChecker } from "../util";
// // Config
// import { API_URL } from "../config";
// // Routing
// import { Redirect } from "react-router-dom";

// TODO: Add update password functionality

const ChangePasswordPage = () => {
  //   const { user, setUser, setError } = useContext(AuthContext);

  //   const [isLoading, setIsLoading] = useState(false);

  return (
    <BasePage useContainer={true}>
      <ErrorModal />
      <Modal>
        <h1>
          <FontAwesomeIcon icon={faLock} />
          Change Password
        </h1>
        <Form>
          <InputBox>
            <FormLabel htmlFor="oldPassword">old password</FormLabel>
            <FormField
              type="password"
              id="oldPassword"
              placeholder="OldPassword123"
              required
              //   onChange={}
            />
          </InputBox>{" "}
          <InputBox>
            <FormLabel htmlFor="newPassword">new password</FormLabel>
            <FormField
              type="password"
              id="newPassword"
              placeholder="NewPassword1234"
              required
              //   onChange={}
            />
          </InputBox>
          <InputBox>
            <FormLabel htmlFor="newPasswordConfirm">confirm password</FormLabel>
            <FormField
              type="password"
              id="newPasswordConfirm"
              placeholder="NewPassword1234"
              required
              //   onChange={}
            />
          </InputBox>
          <SubmitBtn type="submit">Submit</SubmitBtn>
        </Form>
        <p>You will need to login again after changing your password.</p>
      </Modal>
    </BasePage>
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

export default ChangePasswordPage;
