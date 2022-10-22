import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button } from "@mui/material";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <div className="contact" id="profile">
        <div className="box">
        <Button
          onClick={() => window.open("https://github.com/vratant11", "_blank")}
        >
          <div id="git">
            <GitHubIcon fontSize="large" />
          </div>
        </Button>
        <Button
          onClick={() =>
            window.open("https://twitter.com/SinghVratant", "_blank")
          }
        >
          <div id="twitter">
            <TwitterIcon fontSize="large" />
          </div>
        </Button>
        <Button
          onClick={() =>
            window.open("https://www.linkedin.com/in/vratant-singh/", "_blank")
          }
        >
          <div id="linkdin">
            <LinkedInIcon fontSize="large" />
          </div>
        </Button>
        <Button
          onClick={() =>
            window.open("https://www.instagram.com/vratant11/", "_blank")
          }
        >
          <div id="instagram">
            <InstagramIcon fontSize="large" />
          </div>
        </Button>
        </div>
      </div>
      <div className="mail">
        <div className="btn">
          <Button id="button" href="mailto:vratant11@gmail.com">
            Mail Vratant
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
