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
import Tooltip from '@material-ui/core/Tooltip';
import { orderGet } from '../../services/user.services';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, Quantity, Price) {
  return { name, Quantity, Price};
}

const rows = [
  createData('Karma', '8', '100'),
 
];

export default function  ProductList() {
  const history=useHistory();
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async() => {
    await orderGet().then(response => {
      setProducts([...response]);
    }).catch(err => {
      debugger
    })
  }
  const addProduct = () => {
  history.push('/add-product');
  }
  const addDetail = () => {
  history.push('/add-detail');
  }

  return (
  <div>
  <Button variant="contained" color="primary" style={{float:"right",marginBottom:10}} onClick={addProduct}>
  Add Product
</Button>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Id</b></TableCell>
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Order Date</b></TableCell>
            <TableCell align="center"><b>Shippped Date</b></TableCell>
            <TableCell align="center"><b>Customer Name</b></TableCell>
           <TableCell>
            <Button color="default"><b>Explore</b></Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.length > 0 && products.map((product, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
              {product.orderid}
              </TableCell>
              <TableCell align="center"> {product.productname}</TableCell>
              <TableCell align="center"> {product.orderdate}</TableCell>
              <TableCell align="center"> {product.shippeddate}</TableCell> 
              <TableCell align="center"> {product.customername}</TableCell> 

              <TableCell>
              <Button variant="contained" color="primary" onClick={addDetail}>
                Details
              </Button></TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    

    </div> 
    
  );
}
