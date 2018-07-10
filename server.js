const app = require('./app');  
var ipaddress = process.env.HOST || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    port      = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.listen(port, ipaddress, function() {  
    console.log('Express server listening on port ' + port);
});