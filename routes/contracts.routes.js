module.exports = (app) => {

    const contracts = require('../controllers/contracts.controller.js');

    // Create a new contract
    app.post('/api/contracts', contracts.create); 

    // Get a contract by _id
    app.get('/api/contracts/:id', contracts.findOne);

    // Get contracts
    app.get('/api/contracts', contracts.findAll);

    // Update a contract by _id
    app.put('/api/contracts/:id', contracts.update);

    // Delete a contract by _id
    app.delete('/api/contracts/:id', contracts.delete);
}