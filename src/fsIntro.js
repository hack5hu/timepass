const fs = require("fs");

const data = "MERA DATA YAHA H";
// console.log(fs);
fs.writeFile("txt.txt", data, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("file has been successfully written");
});
// reading file
fs.readFile("txt1.txt", "utf8", (err, data) => {
  if (err) {
    console.log("line number 15",err);
    return;
  }
  console.log(data);
});
// fs.appendFile(path, data, callback)