import React from "react";
import "../../assets/scss/auth/login.scss";
import { Button, Card, Container, Form, Image } from "react-bootstrap";
import { loginLogo, tooltip } from "../../assets/images";
import FromInput from "../../components/Input";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
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
                        Email
                        <span style={{ verticalAlign: "super" }}>
                          {tooltip}
                        </span>
                      </div>
                    }
                    type="email"
                  />
                </div>
                <div className="mb-3">
                  <Button className="login-button">Submit</Button>
                </div>
                <div className="mb-3 p-3 tems-service-div">
                  Please check your email for your new password and proceed to{" "}
                  <Link to="/login">
                    <span>log In</span>
                  </Link>
                  .
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

export default ForgotPassword;
