import { useState } from 'react'

import styled from '@emotion/styled'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React from 'react'

// 
import { useNavigate } from 'react-router-dom'
import { addUser } from '../service/api'; 

const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div{
  margin:10px;
  padding:10px;
}
& > h5{
  alignItems: center;
  justify-content:center;
  font-size :24px bold ;
}
`
const initialValues = {
  Name: '', 
  Matches: '',
  Runs:'',
  Average:'',
  StrikeRate :'',
  Centuries: '',
  HalfCenturies: '',
  HighestRun: '',
  Wickets: '',
  Economy: '',
  BestBowling:''
  
  
}

const AddUser = () => {

  const [user, setUser] = useState(initialValues)
  const navigate = useNavigate();


  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })    
  }
  const addUserDetails = async () => {
    await addUser(user);
    navigate('/PlayersList');

    console.log("add User Details",user ); 
  }



  return (
    <Container >
      <Typography variant='h5'>Add User</Typography>
      <FormControl>
        <InputLabel> Player Name</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='Name'/>
      </FormControl> 
      <FormControl>
        <InputLabel> Matches</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='Matches' />
      </FormControl> 
      <FormControl>
        <InputLabel> Runs</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='Runs'/>
      </FormControl> 
      <FormControl>
        <InputLabel> Average</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='Average'/>
      </FormControl> 
      <FormControl>
        <InputLabel> StrikeRate</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='StrikeRate'/>
      </FormControl> 
      <FormControl>
        <InputLabel> Centuries</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='Centuries'/>
      </FormControl> 
      <FormControl>
        <InputLabel> HalfCenturies</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='HalfCenturies'/>
      </FormControl> 
      <FormControl>
        <InputLabel> Highest Run</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='HighestRun'/>
      </FormControl> 
      <FormControl>
        <InputLabel> Wickets</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='Wickets'/>
      </FormControl> 
      <FormControl>
        <InputLabel> Economy</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='Economy'/>
      </FormControl> 
      <FormControl>
        <InputLabel> BestBowling</InputLabel> 
        <Input onChange={(e)=> onValueChange(e)} name='BestBowling'/>
      </FormControl> 
    
      <Button variant='contained' onClick={() => addUserDetails()}> Add User</Button>
    </Container>
  )
}

export default AddUser