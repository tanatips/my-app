class UploadFile
{
    constructor(){
    }
    static SendFile(FILENAME,URL){
        var file = FILENAME.files[0];
            var fd = new FormData();
            fd.append("filename", file);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', URL, true);
            xhr.upload.onprogress = function(e) {
              if (e.lengthComputable) {
                var percentComplete = (e.loaded / e.total) * 100;
                console.log(percentComplete + '% uploaded');
              }
            };
            xhr.onload = function() {
              if (this.status === 200) {
                var resp = JSON.parse(this.response);
                console.log('Server got:', resp);
                
              };
            };
            xhr.send(fd);
         
    }
} 
module.exports = UploadFile;
