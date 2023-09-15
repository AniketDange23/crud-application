import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  
} from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { getUsers ,deleteUser } from "../service/api";
import {Link} from 'react-router-dom';

import styled from "@emotion/styled";

// styling


const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);
  const getUsersData = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };  
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUsersData();
 }
  return (
    <Tables>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Player Name</TableCell>
          <TableCell>Matches</TableCell>
          <TableCell>Runns</TableCell>
          <TableCell>Average</TableCell>
          <TableCell>StrikeRate</TableCell>
          <TableCell>Centuries</TableCell>
          <TableCell>Half Centuries</TableCell>
          <TableCell>Highest Run</TableCell>
          <TableCell>Wickets</TableCell>
          <TableCell>Economy</TableCell>
          <TableCell>BestBowling</TableCell>
          <TableCell></TableCell>

        </Thead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.Name}</TableCell>
            <TableCell>{user.Matches}</TableCell>
            <TableCell>{user.Runs}</TableCell>
            <TableCell>{user.Average}</TableCell>
            <TableCell>{user.StrikeRate}</TableCell>
            <TableCell>{user.Centuries}</TableCell>
            <TableCell>{user.HalfCenturies}</TableCell>
            <TableCell>{user.HighestRun}</TableCell>
            <TableCell>{user.Wickets}</TableCell>
            <TableCell>{user.Economy}</TableCell>
            <TableCell>{user.BestBowling}</TableCell>
            <TableCell>
              <Button style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>  <EditIcon /></Button>
              <Button  style={{ color:'#A80D00'}} onClick={() => deleteUserData(user.id)}><DeleteIcon /></Button>

            </TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Tables>
  );
};
const Tables = styled(Table)`

`;
const Thead = styled(TableRow)`
  background: #00a8ff;
  & > th {
    color: #fff;
    font-size: 16px;
  }
`;
export default AllUser;
