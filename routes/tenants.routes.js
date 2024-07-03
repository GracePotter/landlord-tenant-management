module.exports = (app) => {

    const tenants = require('../controllers/tenants.controller.js');

    // Create a new tenant
    app.post('/api/tenants', tenants.create); 

    // Get a tenant by _id
    app.get('/api/tenants/:id', tenants.findOne);

    // Get tenants
    app.get('/api/tenants', tenants.findAll);

    // Update a tenant by _id
    app.put('/api/tenants/:id', tenants.update);

    // Delete a tenant by _id
    app.delete('/api/tenants/:id', tenants.delete);
}