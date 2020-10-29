import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { grey } from "@material-ui/core/colors";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Help from "@material-ui/icons/Help";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import theme from "../theme";

const Footer = () => {
  return (
    <div style={{height:50, backgroundColor:"black",paddingTop:5,color:"white",paddingLeft:10}}>
    <p>
    copyright@ IMS. all right reserved
    </p>

    </div>
  );
};

export default Footer;

