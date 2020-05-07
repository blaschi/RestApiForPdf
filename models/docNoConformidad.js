/*******************************************************
* Modelo de registro de No Conformidad. 
* Algunas caracteristicas las hereda del documento base
*******************************************************/

const mongoose = require('mongoose');
const base = require('../models/document');

const schemaNco = mongoose.Schema ({
        staffType: {type: String, required: true},
        contactPhone: {type: String, default: "No provisto"},
        contactEmail: {type: String, required: true},
        editionHistory: [{type: mongoose.Schema.Types.ObjectId, ref: 'editionHistory'}]
});

const docNco = base.discriminator("docNoConformidad", schemaNco);

module.exports =  docNco;