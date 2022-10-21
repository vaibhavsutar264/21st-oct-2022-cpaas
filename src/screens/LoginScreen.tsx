import React from 'react';
import { SyntheticEvent, useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import { UserState } from "../reducers/userReducers";
import { RootState } from "../store";
import "./loginscreen.css";
import { type } from "os";
// import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  // let navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo !== undefined && userInfo.email) {
      // navigate('/')
      console.log("navigate pending")
    }
  }, [userInfo]);

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
    const inputElement = document.getElementById('passwordTitle') as HTMLInputElement
    const messageElement = document.getElementById('message') as HTMLInputElement
    if (inputElement != null) {
      messageElement.style.display="block"
    } else {
      console.log("abcd")
    }

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const patternVariable =
      "(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?|][()-<>/]).{8,}";
    if ((e.target as HTMLInputElement).value.match(patternVariable)) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <FormContainer>
      <h1>Login</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email address</Form.Label>
          <input
            type="email"
            data-testid="email-element"
            name="email"
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            autoComplete="none"
            placeholder="Enter your email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
          />
        </Form.Group>

        <Form.Group controlId="password" className="my-3">
          <Form.Label data-testid="password-exist">Password</Form.Label>
          <input
            id="passwordTitle"
            autoComplete="false"
            name="password"
            type="password"
            data-testid="password-element"
            placeholder="Password"
            value={password}
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters."
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]).{8,}"
            onInput={handleChange}
            onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          />
        </Form.Group>
        <div id="message" style={{ width: "300px", height: "100px", backgroundColor: "white" }} >
          <h6>Password must contain the following</h6>
          <p id="letter" className="invalid">
            A <b>lowercase</b> letter
          </p>
          <p id="capital" className="invalid">
            A <b>capital (uppercase)</b> letter
          </p>
          <p id="number" className="invalid">
            A <b>number</b>
          </p>
          <p id="length" className="invalid">
            Minimum <b>8 characters</b>
          </p>
        </div>
        <Button
          name="submit"
          disabled={open}
          variant="primary"
          type="submit"
          className="my-3"
          data-testid="button-element"
        >
          Login
        </Button>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
