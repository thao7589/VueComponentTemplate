var PageComponent = require('ds.base/PageComponent');
module.exports = PageComponent.create({
    
    '/': function(attributes, vars) {
        var response = {};
        return new StatusResponse('good', response);	
    },
});