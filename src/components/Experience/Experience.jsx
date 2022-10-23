import * as React from "react";
import "./experience.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Experience() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expcard">
      <Card sx={{ maxWidth: 345 }} className="insider">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              CSI
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Team CSI"
          subheader="December 17, 2021 - Present"
        />
        <CardMedia
          component="img"
          height="300"
          image="https://psitche.ac.in/che/assets/site/220px-Csi_logo_india.jpg"
          alt="Paella dish"
        />
        {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent> */}
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <IconButton aria-label="share" href="https://csiakgec.in/index">
          <ShareIcon />
        </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>My Journey with team:</Typography>
            <Typography paragraph>
              Working with a team as a Frontend Developer which consists of 31 members for cultivating technical
              activities in the college.Organised various workshops and seminars
              on trending technologies.
            </Typography>
            <Typography paragraph>
              Worked as a team with backend and designers on various group
              projects.
            </Typography>
            <Typography paragraph>
              Biggest achievement with the team is completing the Exam Portal,it
              is basically a portal like JEE mains where we have 2 sides Admin
              and User side from admin we manage all the data to be displayed on
              user side.I have worked on impleminting user side.The project is
              live now.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
