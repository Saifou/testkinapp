import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

import PatientView from './PatientView';
=======
import FormGroup from '@material-ui/core/FormGroup';

import PatientView from './PatientView';
import PopupLogin from './loginPassword/PopupLogin';
>>>>>>> parent of ba82f5a... test build



const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component {
  state = {
<<<<<<< HEAD
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };
=======
    auth: false,
    anchorEl: null,
  };

  _displayPatientIcone=(identifiant, password, iconOpen)=>{
    if(identifiant === "admin" && password === "admin" && iconOpen === true){
      this.setState({auth: true});    
    }else{
      this.setState({auth: false});
    }
  }
>>>>>>> parent of ba82f5a... test build

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
<<<<<<< HEAD

  render() {
=======
  
  render() {

    
>>>>>>> parent of ba82f5a... test build
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    Boolean(anchorEl);

    return (
      <div className={classes.root}>
<<<<<<< HEAD
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
=======

      
        <FormGroup>            
          <PopupLogin _displayPatientIcone={this._displayPatientIcone} _LoginPassword={this.props._LoginPassword}  _Connexion={this._Connexion} _Deconnexion={this._Deconnexion}/>  
        </FormGroup>


>>>>>>> parent of ba82f5a... test build
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Kinapp
            </Typography>
            {auth && (
              <div>
                <PatientView _TraitementDone={this.props._TraitementDone} 
                _TraitementImpossible={this.props._TraitementImpossible}  
                patientFolder={this.props.patientFolder} 
                patient={this.props.patient}
                _EditMedicalFolder={this.props._EditMedicalFolder}/>  
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);