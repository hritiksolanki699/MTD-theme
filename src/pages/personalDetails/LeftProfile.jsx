import React from "react";
import "../../assets/scss/pages/personalDetails.scss";
import { Card, Image, Button } from "react-bootstrap";
import { profilePic } from "../../assets/images";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftProfile = () => {
  return (
    <Card className="card-shadow">
      <Card.Body>
        <div className="profile-left-side">
          <div className="image-div">
            <Image className="img" src={profilePic} alt="profile img" />
          </div>
          <div className="name">Mark John</div>
          <div>License No. : 25325136</div>
          <div>
            <Link to="/edit-profile">
              <Button className="edit-profile-button">
                <FaUserEdit /> Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LeftProfile;
