jQuery(document).ready(function($) {
	jQuery(document).on("deviceready", function() {	
//comienzo//////////////////////////////////////


		 		function downloadFile() {



					let pdfPath = cordova.file.applicationDirectory + "www/osmel.txt"; //'https://MY_SERVER_PATH'

					let permissions = cordova.plugins.permissions;
					permissions.checkPermission(permissions.READ_EXTERNAL_STORAGE, checkPermissionCallback, null);

					// Checking for permissions
					function checkPermissionCallback(status) {
					  console.log('checking permissions')
					  console.log(status)
					  if (!status.hasPermission) {
					    var errorCallback = function () {
					      console.warn('Storage permission is not turned on')
					    }
					    // Asking permission to the user
					    permissions.requestPermission(
					      permissions.READ_EXTERNAL_STORAGE,
					      function (status) {
					        if (!status.hasPermission) {
					          errorCallback()
					        } else {
					          // proceed with downloading
					          downloadFile()
					        }
					      },
					      errorCallback)
					  } else {
					    downloadFile()
					  }
					}

					function downloadFile() {
					  let filePath = cordova.file.externalRootDirectory + 'download/' + 'pana.txt'
					  let fileTransfer = new window.FileTransfer()
					  let uri = pdfPath //encodeURI(decodeURIComponent(pdfPath))

					  // Downloading the file
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
					}


		 			/*
				   var fileTransfer = new FileTransfer();

				   var uri = encodeURI("/hello/www/osmel.txt");

				   //"http://developer.android.com/assets/images/home/ics-android.png",
    				//"file://sdcard/ics-android.png",
				   var fileURL =  "///storage/emulated/"; //0/DCIM/myFile
				    //alert(uri);

				   fileTransfer.download(
					      //uri, fileURL, 
					      //"file://sdcard/Download/base.apk",
    					 //"file://sdcard/Download/pana.apk",
    					  cordova.file.applicationDirectory + "www/osmel.txt",
    					  //cordova.file.externalApplicationStorageDirectory
    					  cordova.file.externalRootDirectory + 'download/' + 'my_file.txt',


					      function(entry) {
					         alert("download complete: " + entry.toURL());
					      },
							
					      function(error) {
					         alert("download error source " + error.source);
					         alert("download error target " + error.target);
					         alert("download error code" + error.code);
					      },
							
					      false, {
					         headers: {
					            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
					         }
					      }
				   );
				   */


				} //final de la funcion


		 		jQuery(this).on("click",'#downloadFile', function () {    
		 			 //alert('sad');
		 			 downloadFile();

				});	











//fin////////////////////////////////////////
	});	
}); //fin	