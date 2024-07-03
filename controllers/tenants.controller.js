const Tenant = require('../models/tenant.model.js');

// Create a new tenant
exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Tenant cannot be empty!"
        });
    } 
    console.log("Creating a new tenant:\n" + JSON.stringify(req.body)); 
    const tenant = new Tenant(req.body);
    tenant.save()
    .then(data => {
        // res.send(data);
        res.send({message: "Successfully created the tenant!"});
    }).catch(err => {
        res.status(500).send({
            message: "Error creating the tenant."
        });
    });
};

// Get a tenant by _id
exports.findOne = (req, res) => {
    console.log("Searching a tenant by _id:" + req.params.id);
    Tenant.findById(req.params.id)
    .then (tenant => {
        if (!tenant) {
            return res.status(404).send({
                message: "Tenant not found with _id: " + req.params.id
            });
        }
        res.send(tenant);
    }).catch(err => {
        res.status(500).send({
            message: "Error retriving the tenant with _id " + req.params.id
        });
    });
};

// Find tenants
exports.findAll = (req, res) => {
    console.log("Searching tenants:\n" + JSON.stringify(req.query));
    var result = null;
    result = Tenant.find(req.query);
    result.then (tenants => {
        res.send(tenants);
    }).catch(err => {
        res.status(500).send({
            message: "Error retriving tenants."
        });
    });
};

// Update a tenant by _id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Tenant cannot be empty!"
        });
    } 
    console.log("Updating the tenant by _id:\n" + req.params.id);
    console.log(JSON.stringify(req.body));
    Tenant.findByIdAndUpdate(req.params.id, req.body)
    .then(tenant => {
        if (!tenant) {
            return res.status(404).send({
                message: "Tenant not found with _id: " + req.params.id
            });
        }
        // res.send(tenant);
        res.send({message: "Successfully updated the tenant!"});
    }).catch(err => {
        res.status(500).send({
            message: "Error updating the tenant with _id " + req.params.id
        });
    });
};

// Delete a tenant by _id
exports.delete = (req, res) => {
    console.log("Updating the customer:\n" +  req.params.id);
    Tenant.findByIdAndDelete(req.params.id)
    .then(tenant => {
        if (!tenant) {
            return res.status(404).send({
                message: "Tenant not found with _id: " + req.params.id
            });
        }
        res.send({message: "Successfully deleted the tenant!"});
    }).catch(err => {
        res.status(500).send({
            message: "Error deleting the tenant with _id " + req.params.id
        });
    });
};
