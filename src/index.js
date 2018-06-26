import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';


import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

const TraitementStatus = {
    IMPOSSIBLE: 'Traitement impossible',
    DONE: 'Traitement valider',

}

const patientReducer = (state = [], action)=>{
    switch(action.type){
        case 'ADD_PATIENT':
            action.payload.id = state.length;
            const newState =[...state, action.payload];
            return newState;
        default:
            return state;
    }
}

const patientFolder = (state = [], action)=>{
    switch(action.type){
        case 'ADD_PATIENT_FOLDER':  
        action.payload.id = state.length;  
            return [...state, action.payload];
        case 'TREATMENT_DONE':
        action.payload.treatment = TraitementStatus.DONE
            return [...state];
        case 'TREATMENT_IMPOSSIBLE':
        action.payload.treatment = TraitementStatus.IMPOSSIBLE
            return [...state];
        case 'EDIT_MEDICAL_FOLDER':
        const medicalFolderIdWant = action.payload.id;
            return state.map(medicalFolder=>{
                if(medicalFolder.id !== medicalFolderIdWant){
                    return medicalFolder;
                }
                return action.payload;
            })        
        default:
            return state;
    }
}





const store = createStore(combineReducers({patient:patientReducer, patientFolder:patientFolder}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store= store;


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
