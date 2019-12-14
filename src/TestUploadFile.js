import React from 'react';
import './progress.css'
import * as Upload from './UploadFile';  
class TestUpLoadFile extends React.Component{
    constructor(pros){
        super(pros);
        this.handleClick = this.handleClick.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.state = {
            url:"http://localhost:9000/upload"
        }
    }
    componentDidMount(){
        var dropbox = document.getElementById("dropbox");
        var url = this.state.url;
        dropbox.ondragover = dropbox.ondragenter = function(evt) {
            evt.preventDefault();
          };
          
          dropbox.ondrop = function(evt) {
            // pretty simple -- but not for IE :(
            var files = evt.dataTransfer.files;
            evt.preventDefault();
            this.className='upload-drop-zone';
            debugger;
            var resultUpload = document.getElementById("resultUpload");
            Upload.SendFile(files,url,resultUpload);
          };
    }
    handleDrop (e){
            e.preventDefault();
            alert('drop test');
            this.className='upload-drop-zone';
            var resultUpload = document.getElementById("resultUpload");
            var file = e.dataTransfer.files;
            Upload.SendFile(file,this.state.url,resultUpload);
    }
    handleDragOver(e){
        e.preventDefault();
        this.className ='upload-drop-zone drop';
        return false;
    }
    handleDragLeave(e){
        e.preventDefault();
            this.className ='upload-drop-zone';
            return false;
    }
    
    handleClick (e){
        var objFile = document.getElementById("filename");
        var files = objFile.files;
        var resultUpload = document.getElementById("resultUpload");
        Upload.SendFile(files,this.state.url,resultUpload);
    }
    render(){
        return( 
            <div className="">
                <h4>Test Upload File </h4>
                <br/>
                
                <div className="dev_center">
                    
                <table border="0" className="App" width="100%" >
                    <tbody>
                        <tr><td colSpan="2"> 
                        <div id="dropbox" className="upload-drop-zone"
                        
                        >
                        Drop file here
                            </div></td></tr>
                    <tr>
                        <td><input type="file" name ="filename[]" id="filename" multiple/>
                        
                        <input type="button" value="Upload" className="button" onClick={this.handleClick} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                           <div id="resultUpload"></div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                             
            </div>
        );
    }
}
 
export default TestUpLoadFile;