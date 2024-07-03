const mongoose = require("mongoose");

const contractSchema = mongoose.Schema({
    contract_date: String,
    contract_address: String,
    landlord_id: String,
    tenant_id_1: String,
    tenant_id_2: String,
    tenant_id_3: String,  
    contract_fee: String,
    door_number: String,
    contract_length: String,
    type: String,
    other_type: String
}, {
    timeStamp: true
});

module.exports = mongoose.model('Contract', contractSchema)