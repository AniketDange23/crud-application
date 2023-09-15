import React from 'react'
import './Home.css'
import { AppBar, Toolbar,  styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
// styling

const Navbar = styled(AppBar)`
background:#111111;
`
const Tabs = styled(NavLink)`
margin:10px;
color:inherit;
text-decoration:none;

 `

const Header = () => {
  return (
      <Navbar position='static'>
          <Toolbar position='static' >
              <Tabs to={'/'} >Indian ODI Players </Tabs>
              <Tabs to={'/PlayersList'}>All Players</Tabs>
              <Tabs to={'/Add_Player'}>Add Players</Tabs>

        </Toolbar>
      </Navbar>
  ) 
}

export default Header