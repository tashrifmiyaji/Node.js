const EventEmitter = require("events");

class Schools extends EventEmitter {
    period() {
        console.log("class start");

        // raise event
        this.emit("ballRing");
    }
}
module.exports = Schools;
