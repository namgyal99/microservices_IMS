import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { userGet } from '../../services/user.services';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, Role, Contact, Email) {
  return { name, Role, Contact, Email};
}

const rows = [
  createData('Karma', 'Admin', 'Contact', 'karmatshenda7@gmail.com'),
 
];

export default function UserList() {
  const history=useHistory();
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    userGet().then(response => {
      setUsers([...response]);
    }).catch(err => {
      debugger
    })
  }

  const addUser = () => {
  history.push('/add-user');
  }

  return (
  <div>
  <Button variant="contained" color="primary" style={{float:"right",marginBottom:10}} onClick={addUser}>
  Add User
</Button>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Id</b></TableCell>
            <TableCell align="right"><b>Name</b></TableCell>
            <TableCell align="right"><b>Role</b></TableCell>
            <TableCell align="right"><b>Contact</b></TableCell>
            <TableCell align="center"><b>Email</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 && users.map((user, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
              {user.id}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.role}</TableCell>
              <TableCell align="right">{user.contact}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    

    </div> 
    
  );
}
