import React, { Component, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

interface SignupFormProps {
  email: string,
  name: string
}

function SignupForm(props: SignupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
    
    e.target.reset();
  }

  return (
    <Form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit}>
      <h2>Join the Mailing List</h2>
      <Form.Group className="mb-3">
        <Form.Control required value={props.email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control value={props.name} type="text" placeholder="Name (optional)" onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Button type="submit" className="w-100 btn btn-lg btn-primary">Sign Up</Button>
    </Form>
  )
}

export default SignupForm;