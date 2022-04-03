const fs = require('fs');
const path = require('path');

//Create folder
fs.mkdir(path.join(__dirname, 'test')
    , {}
    , err => {
        if (err) throw err;
        console.log('Folder created...');
    });

//create and write to file
fs.writeFile(path.join(__dirname, 'test', 'hello.html')
    , 'Hello World!9999999999999999'
    , err => {
        if (err) throw err;
        console.log('File written to...');
        fs.appendFile(path.join(__dirname, 'test', 'hello.html')
            , 'lkjkljkljkl'
            , err => {
                if (err) throw err;
                console.log('File written to...');
            });
    });

