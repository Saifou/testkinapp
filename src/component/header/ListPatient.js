import React from 'react';
import Patient from './Patient';
import MappingDialogue from './MappingDialogue';


const ListPatient =(props)=>{
    
    
        return(
            <div>
                <div>
<<<<<<< HEAD
                    {         
                        props.patient.map(patient => {
                            const patientFolders = props.patientFolder.filter((folder) => folder.id === patient.id);
=======
                {         
                        props.patient.map(patient => { 
                            const patientFolders = patient.files.filter((folder) => folder.frontId === patient.frontId);
                            
                            
>>>>>>> parent of ba82f5a... test build
                            return (
                            <div>
                                <Patient  data={patient} patientFolder={props.patientFolder}/>
                                <MappingDialogue _TraitementDone={props._TraitementDone} 
                                _TraitementImpossible={props._TraitementImpossible} 
                                patientFolder={patientFolders}
                                _EditMedicalFolder={props._EditMedicalFolder} 
                                className ="detailDialoguePlace"/>
                            </div>
                            )
                        })
<<<<<<< HEAD
                    }           
=======
                    }               
>>>>>>> parent of ba82f5a... test build
                </div>
            </div>
        );
    }


export default ListPatient;
