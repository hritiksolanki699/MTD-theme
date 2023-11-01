import React, { useState } from "react";
import "../../assets/scss/auth/login.scss";
import { Button, Card, Container, Form, Image } from "react-bootstrap";
import { loginLogo, tooltip } from "../../assets/images";
import FromInput from "../../components/Input";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
                  <FromInput
                    label={
                      <div>
                        Email / User ID
                        <span style={{ verticalAlign: "super" }}>
                          {tooltip}
                        </span>
                      </div>
                    }
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <Form.Label className="display-inline-block">
                    Password<span>{tooltip}</span>
                  </Form.Label>
                  <div className="relative-div">
                    <Form.Control type={showPassword ? "text" : "password"} />
                    <div
                      className="copy-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <AiOutlineEye role="button" />
                      ) : (
                        <AiOutlineEyeInvisible role="button" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <Button className="login-button">Login</Button>
                </div>
                <div className="mb-3 create-forgot-div">
                  <Link to="/registration">
                    <div className="text">Create Account</div>
                  </Link>
                  <Link to="/forgot-password">
                    {" "}
                    <div className="text">Forgotten Password</div>
                  </Link>
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
