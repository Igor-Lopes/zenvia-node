var http = require('http');

module.exports = function() {

    var zenvia = {};

    var host = 'api-rest.zenvia360.com.br';

    var headers = {
        "Authorization": "Basic " + new Buffer(process.env.zenvia.username + ":" + process.env.zenvia.password, "utf8").toString("base64"),
        "Accept": "application/json",
        "Content-type": "application/json"
    };

    var sendRequest = http.request({
        host: host,
        path: "/services/send-sms",
        method: "POST",
        headers: headers
    }, function(response) {

        var body = "";

        response.on("data", function(chunk) {
            body += chunk;
        });

        response.on("end", function() {
            console.log(body);
        });
    });

    zenvia.sendSms = function(body) {
        sendRequest.write(JSON.stringify(body));
        sendRequest.end();
    };

    return zenvia;
};
