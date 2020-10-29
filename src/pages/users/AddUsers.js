import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { grey } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import PageBase from "../../components/PageBase";
import { userCreate } from "../../services/user.services";

export const FormPage = () => {
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const styles = {
    toggleDiv: {
      marginTop: 20,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey[400],
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: "right"
    },
    saveButton: {
      marginLeft: 5
    }
  };

  const onSubmit = () => {
    debugger
    userCreate({ name: name, email:email, role: role, contact: contact}).then(response => {
      debugger
    }).catch(err => {
      debugger
    })
  }

  return (
    <PageBase title="User" navigation="Application / User">
    <div style={{paddingLeft:200,paddingRight:200}}>
      <form>
        <TextField
          hintText="Name"
          label="Name"
          onChange={(e) => setName(e.target.value)}
          fullWidth={true}
          margin="normal"
          variant="outlined"
        />

         <FormControl fullWidth={true}>
          <InputLabel htmlFor="Role" style={{marginLeft: 10 }}>Role</InputLabel>
          <Select
            inputProps={{
              name: "Role"
            }}
            label="Role"
            fullWidth={true}
            margin="normal"
            onChange={(e) => setRole(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"saller"}>Saler</MenuItem>
          </Select>
        </FormControl>

        <TextField
          hintText="Contact"
          label="Contact"
          fullWidth={true}
          margin="normal"
          onChange={e => setContact(e.target.value)}
          variant="outlined"
        />
        <TextField
          hintText="Email"
          label="Email"
          fullWidth={true}
          margin="normal"
          onChange={e => setEmail(e.target.value)}
          variant="outlined"
        />

        <div style={styles.buttons}>
          <Link to="/">
            <Button variant="contained">Cancel</Button>
          </Link>

          <Button
            style={styles.saveButton}
            variant="contained"
            onClick={() => onSubmit()}
            color="primary"
          >
            Save
          </Button>
        </div>
      </form>
      </div>
    </PageBase>
  )
};

