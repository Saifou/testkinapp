//IMPORT REACT
import React from 'react';
//--------------------------------------------------------------

//IMPORT SMART COMPONENT
import Header from './header/Header.js'
//--------------------------------------------------------------

//IMPORT COMPONENT

import PatientTitle from './title/PatientTitle';
import DiagnosticTitle from './title/DiagnosticTitle';
import PlannificationTitle from './title/PlannificationTitle';
import DateAndTimePlanner from './planification/DateTimePlanner';
import FormDiagnostic from './diagnostic/FormDiagnostic';




import FormPatient from './profilPatient/FormPatient';
//--------------------------------------------------------------

//IMPORT REDUX
import {connect} from 'react-redux';

//--------------------------------------------------------------

//IMPORT BIBLIOTHEQUE MATERIAL
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

//--------------------------------------------------------------




class App extends React.Component{

state ={ patient:[], patientFolder:[]}; 

  render(){
    return(
      <div>
      <Header  patientFolder={this.props.patientFolder}
       patient={this.props.patient} 
       _TraitementDone={this.props._TraitementDone} 
       _TraitementImpossible={this.props._TraitementImpossible}
       _EditMedicalFolder={this.props._EditMedicalFolder}/>
      <PatientTitle/> 
      <FormPatient   _AddPatient={this.props._AddPatient}/>
      <DiagnosticTitle/>
      <FormDiagnostic    _AddPatientFolder={this.props._AddPatientFolder}/>
      <PlannificationTitle/>
      <DateAndTimePlanner/>
      </div>
    )
  }
}

//export default App;

const mapStateToProps = (state) =>{ // on map le state du Store Redux
  return{
    patient: state.patient,
    patientFolder: state.patientFolder,  
  }
}


const _AddPatientActionCreator = (patient)=>{
  return {
    type : 'ADD_PATIENT',
    payload: patient
  }
}

const _AddPatientFolderActionCreator = (patientFolder)=>{
  return {
    type : 'ADD_PATIENT_FOLDER',
    payload: patientFolder
  }
}

const _EditMedicalFolderActionCreator = (patientFolder)=>{
  return {
    type : 'EDIT_MEDICAL_FOLDER',
    payload: patientFolder
  }
}

const _TraitementDoneFolderActionCreator = (treatmentDone)=>{
  return {
    type : 'TREATMENT_DONE',
    payload : treatmentDone
  }
}

const _TraitementImpossibleFolderActionCreator = (treatmentImpossible)=>{
  return {
    type : 'TREATMENT_IMPOSSIBLE',
    payload : treatmentImpossible
  }
}

const mapDispatchActionToProps = (dispatch)=> {
  return{
    _AddPatient: (patient) =>{
      dispatch(_AddPatientActionCreator(patient));
    },
    _AddPatientFolder: (patientFolder) =>{
      dispatch(_AddPatientFolderActionCreator(patientFolder));
    },
    _TraitementDone : (patient) =>{
      dispatch(_TraitementDoneFolderActionCreator(patient))
    },
    _TraitementImpossible : (patient) =>{
      dispatch(_TraitementImpossibleFolderActionCreator(patient))
    },
    _EditMedicalFolder : (patientFolder) =>{
      dispatch(_EditMedicalFolderActionCreator(patientFolder))
    }
  }
}

export default connect(mapStateToProps,mapDispatchActionToProps)(App);


