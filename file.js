//
const fs = require("fs"); // ✅ Use "fs" not "node:fs"

// ✅ Writing to a file
fs.writeFile("./text1.txt", "Subscribe", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File created");
  }
});
