const mongoose = require("mongoose");

const TenantSchema = mongoose.Schema({
    title: String,
    other_title: String,
    first_name: String,
    surname: String,
    phone_number: String,
    email_address: String,
    address_line_1: String,
    address_line_2: String,
    town: String,
    country_city: String,
    eircode: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Tenant', TenantSchema);