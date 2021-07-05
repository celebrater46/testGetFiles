"use strict";

// Getting the list of all files in "img folder" by Javascript failed.
// I guess PHP is suitable to get them (Use "main.php").

// const sourceFolder = Folder("./img");
const sourceFolder = Folder("img");
if (sourceFolder != null)
{
    let fileList = sourceFolder.getFiles();
    console.log("fileList: ");
    console.log(fileList);
}