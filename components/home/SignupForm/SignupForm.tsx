import React, { Component, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './SignupForm.module.css'

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [buttonClassName, setButtonClassName] = useState("w-100 btn btn-lg btn-primary");
  const [buttonText, setButtonText] = useState("Sign Up");

  let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let res = await fetch('/api/register', {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email
      })
    });

    let resJson = await res.json();
    console.log(resJson);

    setButtonClassName("w-100 btn btn-lg btn-success");
    setButtonText("✓");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.text} >Join the Mailing List</h2>
      <Form.Group className="mb-3">
        <Form.Control className={styles.control} required type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control className={styles.control} type="text" placeholder="Name (optional)" onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      {/* <Button type="submit" id="submitButton" className={buttonClassName}>{buttonText}</Button> */}
      <Button type="submit" id="submitButton" className={styles.button}>{buttonText}</Button>
    </Form>
  )
}

export default SignupForm;