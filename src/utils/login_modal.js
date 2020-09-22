import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

import firebase from "firebase/app";
import "firebase/auth";
const LoginModal = (props) => {
  const [error, setError] = useState("");
  const { handleSubmit, register, errors } = useForm();

  const handleReAuth = ({ email, password }) => {
    let getUser = firebase.auth().currentUser;
    let credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    );

    if (getUser) {
      getUser
        .reauthenticateWithCredential(credential)
        .then((user) => {
          // console.log("re auth correct,move forward");
          props.submitForm(props.modalState.formData);
        })
        .catch((error) => {
          setError("Sorry,try again!");
        });
    }
  };
  return (
    <Modal show={props.modalState.open} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reauthentication</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Sorry, we need to make sure you are you</p>
        <form onSubmit={handleSubmit(handleReAuth)}>
          <input
            type="email"
            className="form-control mb-3"
            name="email"
            placeholder="Email"
            ref={register({ required: true })}
          />
          {errors.email && (
            <span className="error">Please check your email</span>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={register({ required: true })}
            className="form-control mb-3"
          />
          {errors.email && <span className="error">error</span>}
          <span className="error">{error}</span>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Reauth
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
