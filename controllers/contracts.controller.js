const Contract = require('../models/contract.model.js');

// Create a new contract
exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Contract cannot be empty!"
        });
    } 
    console.log("Creating a new contract:\n" + JSON.stringify(req.body));     
    const contract = new Contract(req.body);
    contract.save()
    .then(data => {
        // res.send(data);
        res.send({message: "Successfully created the contract!"});
    }).catch(err => {
        res.status(500).send({
            message: "Error creating the contract."
        });
    });
};

// Get a contract by _id
exports.findOne = (req, res) => {
    console.log("Searching a contract by _id:" + req.params.id);
    Contract.findById(req.params.id)
    .then (contract => {
        if (!contract) {
            return res.status(404).send({
                message: "Contract not found with _id: " + req.params.id
            });
        }
        res.send(contract);
    }).catch(err => {
        res.status(500).send({
            message: "Error retriving the contract with _id " + req.params.id
        });
    });
};

// Find contracts
exports.findAll = (req, res) => {
    console.log("Searching contracts:\n" + JSON.stringify(req.query));
    var result = null;
    result = Contract.find(req.query);
    result.then (contracts => {
        res.send(contracts);
    }).catch(err => {
        res.status(500).send({
            message: "Error retriving contracts."
        });
    });
};

// Update a contract by _id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Contract cannot be empty!"
        });
    } 
    console.log("Updating the contract by _id:\n" + req.params.id);
    console.log(JSON.stringify(req.body));
    Contract.findByIdAndUpdate(req.params.id, req.body)
    .then(contract => {
        if (!contract) {
            return res.status(404).send({
                message: "Contract not found with _id: " + req.params.id
            });
        }
        // res.send(contract);
        res.send({message: "Successfully updated the contract!"});
    }).catch(err => {
        res.status(500).send({
            message: "Error updating the contract with _id " + req.params.id
        });
    });
};

// Delete a contract by _id
exports.delete = (req, res) => {
    console.log("Updating the customer:\n" +  req.params.id);
    Contract.findByIdAndDelete(req.params.id)
    .then(contract => {
        if (!contract) {
            return res.status(404).send({
                message: "Contract not found with _id: " + req.params.id
            });
        }
        res.send({message: "Successfully deleted the contract!"});
    }).catch(err => {
        res.status(500).send({
            message: "Error deleting the contract with _id " + req.params.id
        });
    });
};
