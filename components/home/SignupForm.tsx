import { Component, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

class SignupForm extends Component {

    submit = async () => {
        fetch('/api/register')
        .then(data => console.log(data));

    }

    render() {
        return (
            <form action="/api/register" method="post" className="p-4 p-md-5 border rounded-3 bg-light">
              <div>
                <h2>Join the Mailing List</h2>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control"  id="email" name="email" placeholder="name@example.com" required/>
                  <label >Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" name="name" />
                  <label >Name (Optional)</label>
              </div>
                <button onClick={this.submit} className="w-100 btn btn-lg btn-primary" type="submit" formTarget="submission">Sign up</button>

                <iframe name="submission" id="submission" style={{display: "none"}}></iframe>
            </form>
        )
    }
}

export default SignupForm;