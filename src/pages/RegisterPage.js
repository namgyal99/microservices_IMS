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

const RegisterPage = () => {
  const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: "auto",
      position: "absolute",
      top: "20%",
      left: 0,
      right: 0,
      margin: "auto"
    },
    paper: {
      padding: 20,
      overflow: "auto"
    },
    buttonsDiv: {
      textAlign: "center",
      padding: 10
    },
    flatButton: {
      color: grey[500],
      margin: 5
    },
    checkRemember: {
      style: {
        float: "left",
        maxWidth: 180,
        paddingTop: 5
      },
      labelStyle: {
        color: grey[500]
      },
      iconStyle: {
        color: grey[500],
        borderColor: grey[500],
        fill: grey[500]
      }
    },
    loginBtn: {
      float: "right"
    },
    btn: {
      background: "#4f81e9",
      color: "white",
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13
    },
    btnFacebook: {
      background: "#4f81e9"
    },
    btnGoogle: {
      background: "#e14441"
    },
    btnSpan: {
      marginLeft: 5
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div style={styles.loginContainer}>
          <Paper style={styles.paper}>
            <form>
            <h3 style={{textAlign:"center",marginTop:10,marginBottom:10}}>Sign up</h3>
            <TextField hintText="fname" variant="outlined" label="First name" fullWidth={true} />
             <div style={{ marginTop: 16 }}>
            <TextField hintText="Lname" variant="outlined" label="Last name" fullWidth={true} />
            </div>

             <div style={{ marginTop: 16 }}>
              <TextField hintText="E-mail"variant="outlined" label="E-mail" fullWidth={true} />
               </div>

                <div style={{ marginTop: 16 }}>
              <TextField hintText="contact" variant="outlined" label="Contact Number" fullWidth={true} />
              </div>

               <div style={{ marginTop: 16 }}>
                <TextField hintText="Password" variant="outlined" label="Password" fullWidth={true} type="password" />
              </div>

              <div style={{ marginTop: 10 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      label="Remember me"
                      style={styles.checkRemember.style}
                      labelStyle={styles.checkRemember.labelStyle}
                      iconStyle={styles.checkRemember.iconStyle}
                    />
                  }
                  label="Remember me"
                />
                <Link to="/">
                  <Button variant="contained" color="primary" style={styles.loginBtn}>
                    Sign up
                  </Button>
                </Link>
              </div>
            </form>
          </Paper>

          <div style={styles.buttonsDiv}>
            <Button href="/login" style={styles.flatButton}>
              <PersonAdd />
              <span style={{ margin: 5 }}><b>Login</b></span>
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default RegisterPage;
