//Level 1

//- Exercise 1
//Create a function that, when executed, writes a phrase to a file.
const fs = require( 'fs' );
let text = "it may be that the answer is not to ask why";

function writeFile(text, text) {
    fs.writeFile( 'file.txt', text, ( err ) => {
    if (err)
        throw err;
    console.log( 'the file has been written correctly' );
    });
};

writeFile( 'file.txt', text );

//- Exercise 2
//Create another function that displays the content of the file from the previous exercise on the console.
function showFile( fileName ) {
    fs.readFile( fileName, function ( err, data ) {
        if (err)
          console.log(err);//  throw err;
            console.log(data);
    } );
};
showFile( 'file.txt' );
//- Exercise 3
//Create a function that compresses the level 1 file.