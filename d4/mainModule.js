const memoryInfo = require("./memoryInfo.js");

const onLowMemory = function(message){
    console.log(message);
}

const message = function(x) {
    console.log(x + " edz je car")
}
memoryInfo.registerForAlerts(onLowMemory);


memoryInfo.registerForAlerts(message)