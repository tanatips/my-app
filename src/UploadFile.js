class UploadFile
{
    constructor(){
    }
    static SendFile(FILENAME,URL,RESULTUPLOAD){
        var lstResult=[];
        lstResult.push("<table width='100%' id='listUpload'>");
        lstResult.push("<tbody>");
        lstResult.push("<tr><th width='10%'>No</th><th width='30%'>File Name</th> <th width='60%'>Progress</th></tr>");
        var rank = new Array(); 
        for(var j = 0;j<FILENAME.files.length;j++)
        {
          var tmp = Math.floor((Math.random()*100000)+3);
          rank.push(tmp);
          lstResult.push("<tr><td>"+(j+1)+"</td><td>"+FILENAME.files[j].name+"</td><td><div class='myProgress' id='progress"+tmp+"'><div class='myBar' id='bar"+tmp+"'></div></div></td></tr>");
        }
        lstResult.push("</tbody>");
        lstResult.push("</table>");
        RESULTUPLOAD.innerHTML = lstResult.join("");
        for(var i = 0;i<FILENAME.files.length;i++)
        { 
          this.Upload(FILENAME.files[i],URL,rank[i]);
        }
    }
    static Upload(file,url,rank){
            var fd = new FormData();
            fd.append("filename", file);
            var xhr = new Array();
           
            xhr[rank] = new XMLHttpRequest();
            xhr[rank].open('POST', url, true);
            xhr[rank].upload.onprogress = function(e) {
              if (e.lengthComputable) {
                var percentComplete = (e.loaded / e.total) * 100;
                console.log(percentComplete + '% uploaded');
                var bar = document.getElementById("bar"+rank);
                if(bar!= null){
                  bar.style.width=percentComplete+"%";
                  bar.innerHTML=Math.round(percentComplete)+"%";
                }
              }
            };
            xhr.onload = function() {
              if (this.status === 200) {
                var resp = JSON.parse(this.response);
                console.log('Server got:', resp);
                
              };
            };
            xhr[rank].send(fd);
    }

} 
module.exports = UploadFile;
