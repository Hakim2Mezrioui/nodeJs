const fs = require("fs");

// fs.writeFile("test.txt", "mezrioui is a good man", (error) => {
//     if(error) {
//         console.log(error);
//     }
//     console.log("success");
// });

// fs.appendFile("test.txt", " i'm a hero", (error) => {
//     if(error) {
//         console.log(error);
//     }

//     console.log("success");
// })

// fs.readFile("test.txt", (error, data) => {
//     if(error) {
//         console.log(error);
//     }

//     console.log(data.toString());
// });

// fs.readFile("test.txt", {encoding: "utf-8"}, (error, data) => {
//     if(error) {
//         console.log(error);
//     }

//     console.log(data);
// });

fs.unlink("test.txt", (error) => {
    if(error) {
        console.log(error);
    }
    console.log("success");
});