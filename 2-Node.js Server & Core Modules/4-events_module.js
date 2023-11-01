// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// // raise a listener for ballRing event
// emitter.on("ballRing", () => {
//     console.log("we need to run!");
// });

// // raise an event
// emitter.emit("ballRing");
// // // //

const Schools = require("./4.1-for_events_module");

let school = new Schools();
school.on("ballRing", () => {
    console.log("we need to run!");
});

school.period();
