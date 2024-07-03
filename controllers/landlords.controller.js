const Landlord = require('../models/landlord.model.js');

// Create a new landlord
exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Landlord cannot be empty!"
        });
    } 
    console.log("Creating a new landlord:\n" + JSON.stringify(req.body)); 
    const landlord = new Landlord(req.body);
    landlord.save()
    .then(data => {
        // res.send(data);
        res.send({message: "Successfully created the landlord!"});
    }).catch(err => {
        res.status(500).send({
            message: "Error creating the landlord."
        });
    });
};

// Get a landlord by _id
exports.findOne = (req, res) => {
    console.log("Searching a landlord by _id:" + req.params.id);
    Landlord.findById(req.params.id)
    .then (landlord => {
        if (!landlord) {
            return res.status(404).send({
                message: "Landlord not found with _id: " + req.params.id
            });
        }
        res.send(landlord);
    }).catch(err => {
        res.status(500).send({
            message: "Error retriving the landlord with _id " + req.params.id
        });
    });
};

// Find landlords
exports.findAll = (req, res) => {
    console.log("Searching landlords:\n" + JSON.stringify(req.query));
    var result = null;
    result = Landlord.find(req.query);
    result.then (landlords => {
        res.send(landlords);
    }).catch(err => {
        res.status(500).send({
            message: "Error retriving landlords."
        });
    });
};

// Update a landlord by _id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Landlord cannot be empty!"
        });
    } 
    console.log("Updating the landlord by _id:\n" + req.params.id);
    console.log(JSON.stringify(req.body));
    Landlord.findByIdAndUpdate(req.params.id, req.body)
    .then(landlord => {
        if (!landlord) {
            return res.status(404).send({
                message: "Landlord not found with _id: " + req.params.id
            });
        }
        // res.send(landlord);
        res.send({message: "Successfully updated the landlord!"});
    }).catch(err => {
        res.status(500).send({
            message: "Error updating the landlord with _id " + req.params.id
        });
    });
};

// Delete a landlord by _id
exports.delete = (req, res) => {
    console.log("Updating the customer:\n" +  req.params.id);
    Landlord.findByIdAndDelete(req.params.id)
    .then(landlord => {
        if (!landlord) {
            return res.status(404).send({
                message: "Landlord not found with _id: " + req.params.id
            });
        }
        res.send({message: "Successfully deleted the landlord!"});
    }).catch(err => {
        res.status(500).send({
            message: "Error deleting the landlord with _id " + req.params.id
        });
    });
};
