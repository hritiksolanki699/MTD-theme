import React from "react";
import "../../assets/scss/auth/login.scss";
import { Button, Card, Container, Form, Image } from "react-bootstrap";
import { loginLogo } from "../../assets/images";
import FromInput from "../../components/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="login-container">
      <div className="biger-cricle">
        <div className="small-cricle">
          <div className="heading">Welcome to HiveMTD</div>
          <Card className="login-card">
            <Card.Header className="login-header">
              <Image src={loginLogo} alt="MTD HIVE" />
            </Card.Header>
            <Card.Body>
              <Form>
                <div className="mb-3">
                  <FromInput label="Email / User ID*" type="text" />
                </div>
                <div className="mb-3">
                  <FromInput label="Password*" type="Password" />
                </div>
                <div className="mb-3">
                  <Button className="login-button">Login</Button>
                </div>
                <div className="mb-3 create-forgot-div">
                  <Link to="/registration">
                    <div className="text">Create Account</div>
                  </Link>
                  <div className="text">Forgotten Password</div>
                </div>
                <div className="mb-3 p-3 tems-service-div">
                  By clicking Login, you accept the{" "}
                  <span>HivePayroll Terms of Service</span>
                </div>
                <div className="text-center">
                  Problem in Login: Contact us at support@hivemtd.com
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Login;
