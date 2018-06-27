const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// ----------- schema dossier ------------
const PatientFolderSchema = new Schema({
    frontId: {
        type: Number,
    },
    pathologie: {
        type: String,
        required: [true, 'Pathological area']
    },
    traitement: {
        type: String,
        required: [false]
    },
    observation: {
        type: String,
        required: [false]
    },
    nextAppointement: {
        type: Object
    }
});

// ----------- schema patient ------------
const PatientSchema = new Schema({
    frontId: {
        type: Number
    },
    name: {
        type: String,
        //required: [true, 'patient name is required']
    },
    surname: {
        type: String,
        //required: [true, 'patient first name is required']
    },
    socialSecurityNumber: {
        type: Number,
        /*
        validate: {
            validator: (v) => {
                return /^([0-9]{12})$/.test(v);
            }
        },
        required: [true, 'patient social security number is required']
        */
    },
    birthd: {
        type: Object
    },
    adress: {
        type: String,
        //required: [true, 'patient address is required']
    },
    phoneNumber: {
        type: Number,

        /*
        validate: {
            validator: (v) => {
                return /^([0-9]{9})$/.test(v);
            }
        },
        required: [true, 'patient phone number is required']
        */
    },
    mail: {
        type: String,
        /*
        validate: {
            validator: (v) => {
                return /^([a-z0-9-_.]+)@([a-z0-9-]+)\.?([a-z0-9]{2,7}?)\.([a-z]{2,4})$/.test(v);
            }
        },
        required: [true, 'patient email is required']*/
    },
    files: [PatientFolderSchema]
});

const Patient = mongoose.model('patient', PatientSchema);

module.exports = Patient;