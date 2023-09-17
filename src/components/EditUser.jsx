import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser ,editUser  } from '../service/api';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 20px auto;
  & > div {
    margin: 10px;
    padding: 10px;
  }
  & > h5 {
    text-align: center;
    font-size: 24px;
  }
`;

const initialValues = {
  Name: '',
  Matches: '',
  Runs: '',
  Average: '',
  StrikeRate: '',
  Centuries: '',
  HalfCenturies: '',
  HighestRun: '',
  Wickets: '',
  Economy: '',
  BestBowling: '',
};

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
}, )

  const getUserData = async () => {
    try {
      const response = await getUser(id);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUserDetails = async () => {
    // await addUser(user);
await editUser(user,id)
    navigate('/PlayersList');
  };

  return (
    <Container>
      <Typography variant='h5' style={{fontSize: 30, fontWeight:600 , color:'#51b2b3'}}>Edit User</Typography>
      <FormControl>
        <InputLabel>Player Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='Name' value={user.Name} />
      </FormControl>
      <FormControl>
        <InputLabel>Matches</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='Matches' value={user.Matches} />
      </FormControl>
      <FormControl>
        <InputLabel> Runs</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='Runs' value={user.Runs}/>
      </FormControl> 
      <FormControl>
        <InputLabel> Average</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='Average' value={user.Average}/>
      </FormControl> 
      <FormControl>
        <InputLabel> StrikeRate</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='StrikeRate' value={user.StrikeRate}/>
      </FormControl> 
      <FormControl>
        <InputLabel> Centuries</InputLabel>  
        <Input onChange={(e)=> onValueChange(e)} name='Centuries' value={user.Centuries}/>
      </FormControl> 
      <FormControl>
        <InputLabel> Half Centuries</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='HalfCenturies' value={user.HalfCenturies}/>
      </FormControl> 
      <FormControl>
        <InputLabel> Highest Runs</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='HighestRun' value={user.HighestRun}/>
      </FormControl> 
      <FormControl>
        <InputLabel> Wickets</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='Wickets' value={user.Wickets}/>
      </FormControl> 
      <FormControl>
        <InputLabel> Economy</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='Economy' value={user.Economy}/>
      </FormControl> 
      <FormControl>
        <InputLabel> Best Bowling</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='BestBowling' value={user.BestBowling}/>
      </FormControl> 
      <Button variant='contained' style={{width:200 ,background:'#51b2b3' }} onClick={() => saveUserDetails()}>
        Save User
      </Button>
    </Container>
  );
};

export default EditUser;
