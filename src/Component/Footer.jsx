import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "@mui/material";

function Footer() {
  const socialMediaAccounts = [
    {
      id: 0,
      name: "GitHub",
      icon: GitHubIcon,
      url: "https://github.com/yashrojesara/",
    },
    {
      id: 1,
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/yash-rojesara-749aa3155/",
    },
    {
      id: 2,
      name: "Twitter",
      icon: TwitterIcon,
      url: "https://twitter.com/yash_rojesara/",
    },
    {
      id: 3,
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/yash__rojesara/",
    },
  ];

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center", fontFamily: "monospace" }}
          >
            &copy; | {new Date().getFullYear()} | Yash Rojesara
          </Typography>
          <div>
            {socialMediaAccounts.map((account) => {
              return (
                <Link
                  href={account.url}
                  key={account.id}
                  target={"_blank"}
                  rel="noopener"
                  style={{ color: "white", margin: "0 5px" }}
                >
                  <account.icon />
                </Link>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
