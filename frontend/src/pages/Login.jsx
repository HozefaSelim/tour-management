import React, { useState, useContext } from "react";
import "../styles/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { toast } from "react-toastify";
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);
      console.log(result.data)
      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
      toast.success("Well come");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <Container>
      <Row>
        <Col lg="8" className="m-auto">
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="" />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Login</h2>
              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    required
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Password"
                    id="password"
                    required
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button className="btn secondary__btn auth__btn" type="submit">
                  Login
                </Button>
              </Form>
              <p>
                Don't have an account? <Link to="/register">Create</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
