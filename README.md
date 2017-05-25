# zenvia-node

Lightweight and dependency free Node Module for sending SMS messages with Zenvia API.

## Usage

Install the package:

`npm install zenvia-node`

Example:

```
// Define Zenvia API credentials
var credentials = {
    username: "user.name",
    password: "abcdefghij"
};

// Require zenvia module
var zenvia = require('zenvia-node')(credentials);

// Sending a single sms
zenvia.sendSms({
    "sendSmsRequest": {
        "to": "5585996791915",
        "msg": "Hello from API"
    }
}).then(function(data) {
    console.log(data); //Response
}).catch(function(err) {
    console.log("Error: " + err); //Error
});
```

## To do:

* Testing
* Send multiple SMS messages
* Received SMS messages







