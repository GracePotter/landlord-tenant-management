module.exports = (app) => {

    const landlords = require('../controllers/landlords.controller.js');

    // Create a new landlord
    app.post('/api/landlords', landlords.create); 

    // Get a landlord by _id
    app.get('/api/landlords/:id', landlords.findOne);

    // Get landlords
    app.get('/api/landlords', landlords.findAll);

    // Update a landlord by _id
    app.put('/api/landlords/:id', landlords.update);

    // Delete a landlord by _id
    app.delete('/api/landlords/:id', landlords.delete);
}