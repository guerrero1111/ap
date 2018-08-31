

// Start file download.


///////////////////////////////funcion para escribir fichero///////////////////////////
  /* 

    function gotFS(fileSystem) {
       alert('aaa');
        fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
    }

    function gotFileEntry(fileEntry) {
        fileEntry.createWriter(gotFileWriter, fail);
    }

    function gotFileWriter(writer) {
        writer.onwriteend = function(evt) {
            alert("contents of file now 'some sample text'");
            writer.truncate(11);  
            writer.onwriteend = function(evt) {
                alert("contents of file now 'some sample'");
                writer.seek(4);
                writer.write(" different text");
                writer.onwriteend = function(evt){
                    alert("contents of file now 'some different text'");
                }
            };
        };
        writer.write("some sample text");
    }

    function fail(error) {
        alert(error.code);
    }
    */
////////////////////
/*

    function writeFile(fileEntry, dataObj) {
    // Create a FileWriter object for our FileEntry (loMio.txt).
    
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            alert("Successful file write...");
            readFile(fileEntry);
        };

        fileWriter.onerror = function (e) {
            alert("Failed file write: " + e.toString());
        };

        // If data object is not passed in,
        // create a new Blob instead.
        if (!dataObj) {
            dataObj = new Blob(['some file data'], { type: 'text/plain' });
        }

        fileWriter.write(dataObj);
    });
}
*/

//////////////////////////////
/*function createFile() {
   var type = window.PERSISTENT;
   var size = 5*1024*1024;
   alert('antes inicio');
   window.requestFileSystem(type, size, successCallback, errorCallback)
   alert('inicio');
   function successCallback(fs) {
      fs.root.getFile('loMio.txt', {create: true, exclusive: true}, function(fileEntry) {
         alert('File creation successfull!')
      }, errorCallback);
   }

   function errorCallback(error) {
      alert("ERROR: " + error.code)
   }
  
}


function writeFile() {
   var type = window.PERSISTENT;
   var size = 5*1024*1024;
   window.requestFileSystem(type, size, successCallback, errorCallback)

   function successCallback(fs) {
     let pdfPath = cordova.file.applicationDirectory + "www/osmel.txt";
      fs.root.getFile(pdfPath, {create: true}, function(fileEntry) {

         fileEntry.createWriter(function(fileWriter) {
            fileWriter.onwriteend = function(e) {
               alert('Write completed.');
            };

            fileWriter.onerror = function(e) {
               alert('Write failed: ' + e.toString());
            };

            var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});
            fileWriter.write(blob);
         }, errorCallback);
      }, errorCallback);
   }

   function errorCallback(error) {
      alert("ERROR: " + error.code)
   }
}
*/

/*

 function gotFileEntry(fileEntry) {
                fileEntry.createWriter(gotFileWriter, fail);
            }

    function gotFileWriter(writer) {
                writer.onwrite = function(evt) {
                    alert("write success");
                };

                writer.write("some sample text");
                writer.abort();
                // contents of file now 'some different text'
            }

            function fail(error) {
                alert("error : "+error.code);
            }     

                   */


/*
function gotFS(fileSystem) {
        //let pdfPath = cordova.file.applicationDirectory + "www/osmel.txt";
        alert(fileSystem.root.fullPath);

        myRoot = null;
        window.resolveLocalFileSystemURI("/var/www/html/hello/www", function(dirEntry) {
          myRoot = dirEntry;
        });
        fileSystem.root.getFile("readme2.txt", {create: true, exclusive: false}, gotFileEntry, fail);
    }

    function gotFileEntry(fileEntry) {
        fileEntry.createWriter(gotFileWriter, fail);
    }

    function gotFileWriter(writer) {
        writer.onwriteend = function(evt) {
            alert("contents of file now 'some sample text'");
            writer.truncate(11);
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample'");
                writer.seek(4);
                writer.write(" different text");
                writer.onwriteend = function(evt){
                    console.log("contents of file now 'some different text'");
                }
            };
        };
        writer.write("some sample text");
    }

    function fail(error) {
        console.log(error.code);
    }

 window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
 */


/*
window.requestFileSystem(window.PERSISTENT, 1024*1024, function(fs) {
    fs.root.getFile('loMio.txt', {create: false}, function(fileEntry) {
        fileEntry.remove(function() {
            console.log('File removed.');
        }, errorHandler);
    }, errorHandler);
}, errorHandler);
*/

function errorHandlerRemovido(error) {
    alert("Error de fichero removido: " + error.code)
}

function errorHandler(error) {
    alert("ERROR: " + error.code)
}




function onInitFs(fs) {

      //eliminar el fichero
      /*
      fs.root.getFile('loMio.txt', {create: false}, function(fileEntry) {
          fileEntry.remove(function() {
              alert('Fichero removido.');
          }, errorHandlerRemovido);
      }, errorHandler);
      */

      //Crear el fichero
      //, exclusive: true(obligatorio tiene que no existir para crearlo)
      //, exclusive: false(obligatorio tiene que existir para leerlo)
      //, exclusive: sino se especifica se puede sobreescribir

      alert('estoy creando');
      fs.root.getFile('loMio.txt', {create: true}, function(fileEntry) {  

                // Create a FileWriter object for our FileEntry (loMio.txt).
                  fileEntry.createWriter(function(fileWriter) {
                          fileWriter.onwriteend = function(e) {
                              //alert('Si escribio bien.');
                          };
                          fileWriter.onerror = function(e) {
                              //alert('hubo un fallo en escritura: ' + e.toString());
                          };
                          // Create a new Blob and write it to loMio.txt.
                            /*
                            var bb = new BlobBuilder(); // Note: window.WebKitBlobBuilder in Chrome 12.
                            bb.append('osmel y pana este es el texto');
                            fileWriter.write(  bb.getBlob('text/plain')  );
                            */

                            dataObj=new Blob(['osmel y pana'],{type:'text/plain'});
                            fileWriter.write(dataObj);


                            /*
                            //agregar datos
                           // alert('asdasd');
                           fileWriter.seek(fileWriter.length);  // Start write position at EOF.
                           // Create a new Blob and write it to loMio.txt.
                           
                            dataObj2=new Blob(['y otros datos'],{type:'text/plain'});
                            fileWriter.write(dataObj2);

                            alert('pana');
                            */


                   }, errorHandler);
        //alert("success: ");
          // fileEntry.isFile === true
          // fileEntry.name == 'loMio.txt'
          // fileEntry.fullPath == '/loMio.txt'
    }, errorHandler);


      alert('estoy leyendo');
    fs.root.getFile('loMio.txt', {}, function(fileEntry) {

        fileEntry.file(function(file) {

            var reader = new FileReader();
            reader.onloadend = function(e) {
                var txtArea = document.createElement('textarea');
                txtArea.value = this.result;
                document.body.appendChild(txtArea);
            };
            reader.readAsText(file);
        }, errorHandler);
    }, errorHandler);  


    /*
    alert('permiso');

    let permissions = cordova.plugins.permissions
    permissions.checkPermission(permissions.READ_EXTERNAL_STORAGE, checkPermissionCallback, null)

    function checkPermissionCallback(status) {
      alert('checking permissions')
      alert(status)
    }
    */

    
    function moveFile(fileUri) {
    window.resolveLocalFileSystemURL(
          fileUri,
          function(fileEntry){
                newFileUri  = cordova.file.dataDirectory + "images/";
                oldFileUri  = fileUri;
                fileExt     = "." + oldFileUri.split('.').pop();

                newFileName = guid("car") + fileExt;
                window.resolveLocalFileSystemURL(newFileUri,
                        function(dirEntry) {
                            // move the file to a new directory and rename it
                            fileEntry.moveTo(dirEntry, newFileName, successCallback, errorCallback2);
                        },
                        errorCallback);
          },
          errorCallback);
}


function successCallback(fs) {
  alert('sad');
}

function errorCallback2(fs) {
  alert(fs);
}



    //let filePath = cordova.file.externalRootDirectory + 'download/'; // + 'pana.txt'

    window.requestFileSystem(window.PERSISTENT, 1024*1024, function(fs) {

      alert('estoy moviendo');


               fs.root.getFile('loMio.txt', {}, function(fileEntry) {
                      //alert(  JSON.stringify(fs.nativeUrl) );
                      //https://stackoverflow.com/questions/27910783/cordova-move-file-using-the-file-url
                     let filePath = cordova.file.externalApplicationStorageDirectory; // + 'pana100.txt';
                     //let raiz = fs.root;

                     window.resolveLocalFileSystemURL(filePath,
                        function(dirEntry) {
                          //alert(dirEntry);
                          alert(JSON.stringify(dirEntry.toURL()+'osmel33.txt' ));
                            // move the file to a new directory and rename it
                            fileEntry.moveTo(fs.root, dirEntry.toURL()+'osmel33.txt', successCallback, errorCallback);
                        },
                        error1);

                   // fileEntry.moveTo(fs.root, 'pana35.txt');

                    
                }, error2);
          

            // Downloading the file
            /*


            let filePath = cordova.file.externalRootDirectory + 'download/' + 'pana.txt'
            let fileTransfer = new window.FileTransfer()
            //let uri = pdfPath //encodeURI(decodeURIComponent(pdfPath))
            //cordova.file.applicationDirectory + "www/osmel.txt"; //'https://MY_SERVER_PATH'

            let uri = cordova.file.applicationDirectory + "www/loMio.txt";

            fileTransfer.download(uri, filePath,
              function (entry) {
                alert('Successfully downloaded file, full path is ' + entry.fullPath)
                alert(entry)
              },
              function (error) {
                alert('error')
                alert(error)
              },
              false
            )
            */


        
        //move('loMio.txt', cordova.file.externalRootDirectory + 'download/');
          /*
          fs.root.getFile('loMio.txt', {}, function(fileEntry) {
                alert(  JSON.stringify(fs.nativeUrl) );
              fileEntry.moveTo(cordova.file.externalRootDirectory + 'download/', 'pana30.txt');

              
          }, error2);
          */

          /*
              fs.root.getDirectory('', {}, function(dirEntry) {
                alert('download');
                  fileEntry.moveTo(dirEntry);
              }, error1);
              */
        

    }, errorHandler);





}

function error1(error) {
    alert("ERROR 1    : " + error.code)
}

function error2(error) {
    alert("ERROR 2    : " + error.code)
}


function move(src, dirName) {
    fs.root.getFile(src, {}, function(fileEntry) {
        fs.root.getDirectory(dirName, {}, function(dirEntry) {
            fileEntry.moveTo(dirEntry);
        }, errorHandler);
    }, errorHandler);
}



window.requestFileSystem(window.PERSISTENT, 1024*1024, onInitFs, errorHandler);

