import React from "react";
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


export const ProductPage = () => {
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

  return (
    <PageBase title="Product" navigation="Application / Product">
    <div style={{paddingLeft:200,paddingRight:200}}>
      <form>
        <TextField
          hintText="Name"
          label="Name"
          fullWidth={true}
          margin="normal"
          variant="outlined"
        />

         

        <TextField
          hintText="Quantity"
          label="Quantity"
          fullWidth={true}
          margin="normal"
          variant="outlined"
        />
        <TextField
          hintText="Price"
          label="Price"
          fullWidth={true}
          margin="normal"
          variant="outlined"
        />

    

       
        <div style={styles.buttons}>
          <Link to="/">
            <Button variant="contained">Cancel</Button>
          </Link>

          <Button
            style={styles.saveButton}
            variant="contained"
            type="submit"
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

