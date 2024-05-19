const fs = require('fs');

// Create file using Node.js and write something in it.
// fs.writeFile('index.html', "Hello Babu", function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Done")
//     }
// })


// To add text after what is written in the already created file using Node.js.
// fs.appendFile('index.html', " kaisi ho", function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Done")
//     }
// })



// Read file using Node.js.
// fs.readFile("index.html", function (err, data) {
//     if (err) console.log(err);
//     else console.log(data.toString());
// })



// Rename existing file using Node.js.
// fs.rename('index.html', "hero.html", function (err) {
//     if (err) console.log(err);
//     else console.log("Done")
// })



// Copy one file from one place to another place using Node.js.
// Note: You can also change the file name in to the new folder.
// fs.copyFile("oldFilePath", "newFilePath", function (err) { })

// fs.copyFile("index.html", "./copy/style.css", function (err) {
//     if (err) {
//         console.log(err);  // can also log err.message
//     }
//     else {
//         console.log("Done");
//     }
// })



// To delete an existing file using Node.js.
// fs.unlink("index.html", function (err) {
//     if (err) console.log(err);
//     else console.log("Removed");
// })



// Create folders using Node.js.
// fs.mkdir("./newFolder", function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Created");
//     }
// })

// Read folders using Node.js.
// fs.readdir("./folder", function (err, files) {
//     if (err) console.log(err);
//     else console.log(files);
// })

// To delete a existing folder using Node.js.
// Note: rmdir only removes the empty directories only by default.
// Note: That's why we have used {recursive: true} below.
// fs.rmdir("./copy", { recursive: true }, function (err) {
//     if (err) console.log(err);
//     else console.log("Removed");
// })

// Note: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed, that's why we will use fs.rm(path, { recursive: true }) instead
// fs.rm("./copy", { recursive: true }, function (err) {
//     if (err) console.log(err);
//     else console.log("Removed");
// })






// Run the code below or see the magic, if you don't see the magic then you are not ready yet.
// fs.mkdir("./newFolder", function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         fs.writeFile('./newFolder/index.html', "Hello Babu", function (err) {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 fs.rename('./newFolder/index.html', "./newFolder/style.css", function (err) {
//                     if (err) console.log(err);
//                     else {
//                         fs.copyFile("./newFolder/style.css", "./index.html", function (err) {
//                             if (err) {
//                                 console.log(err);
//                             }
//                             else {
//                                 fs.rm("./newFolder", { recursive: true }, function (err) {
//                                     if (err) {
//                                         console.log(err);
//                                     }
//                                     else {
//                                         fs.unlink("index.html", function (err) {
//                                             if (err) {
//                                                 console.log(err);
//                                             }
//                                             else {
//                                                 console.log("Removed");
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })