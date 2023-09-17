import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import './Home.css'



const data = {
  players: [
    {
      name: "Virat Kohli",
      image: "https://admin.thecricketer.com/weblab/Sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/kohliheadshot-min.jpg",
      age: 33,
      DOB: "November 5, 1988",
      wife: "Anushka Sharma",
      position: "Batsman",
      id:1
    },
    {
      name: "Rohit Sharma",
      image: "https://admin.thecricketer.com/weblab/Sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/sharmaheadshot-min.jpg",
      age: 34,
      DOB: "April 30, 1987",
      wife: "Ritika Sajdeh",
      position: "Batsman/Captain",
      id:2

      ,
    },
    {
      name: "Jasprit Bumrah",
      image: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/jasprit-bumrah.png",
      age: 28,
      DOB: "December 6, 1993",
      wife: "Sanjana Ganesan",
      position: "Fast Bowler",
      id:3

    },
    {
      name: "KL Rahul",
      image: "https://cricgram.b-cdn.net/wp-content/uploads/2019/08/KL-Rahul.jpg",
      age: 29,
      DOB: "April 18, 1992",
      wife: "Athiyaa Sheeti",
      position: "Batsman/Wicket-keeper",
      id:4

    },
    {
      name: "Ravindra Jadeja",
      image: "https://www.sportzcraazy.com/wp-content/uploads/2019/09/SDFGHRGHTR.jpg",
      age: 32,
      DOB: "December 6, 1988",
      wife: "Rivaba Solanki",
      position: "All-rounder",
      id:5

    },
  ],
};


const Home = () => {

  return (
 <div className="card">
     <Card sx={{ maxWidth: 230,border: '1px solid #111111', margin:2  }}  >
      {data.players.map((player, index) => (
        <CardActionArea li key={index}>
          <CardMedia
            component="img"
            height="160"
            image={player.image}
            alt={player.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {player.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Age: {player.age}
            </Typography>
            <Typography variant="body2" color="text.secondary">
          Date of Birth - {player.DOB}
            </Typography>
            <Typography variant="body2" color="text.secondary">
           Wife {player.wife}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Position: {player.position}
            </Typography>
          </CardContent>
        </CardActionArea>
      ))}
    </Card>
      <br />
      <Card sx={{ maxWidth: 230,border: '1px solid #111111', margin:2  }}  >
      {data.players.map((player, index) => (
        <CardActionArea li key={index}>
          <CardMedia
            component="img"
            height="160"
            image={player.image}
            alt={player.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {player.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Age: {player.age}
            </Typography>
            <Typography variant="body2" color="text.secondary">
          Date of Birth - {player.DOB}
            </Typography>
            <Typography variant="body2" color="text.secondary">
           Wife {player.wife}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Position: {player.position}
            </Typography>
          </CardContent>
        </CardActionArea>
      ))}
      </Card>
      
      <Card sx={{ maxWidth: 230,border: '1px solid #111111', margin:2  }}  >
      {data.players.map((player, index) => (
        <CardActionArea li key={index}>
          <CardMedia
            component="img"
            height="160"
            image={player.image}
            alt={player.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {player.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Age: {player.age}
            </Typography>
            <Typography variant="body2" color="text.secondary">
          Date of Birth - {player.DOB}
            </Typography>
            <Typography variant="body2" color="text.secondary">
           Wife {player.wife}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Position: {player.position}
            </Typography>
          </CardContent>
        </CardActionArea>
      ))}
      </Card>
    </div>


  );
};

export default Home;
