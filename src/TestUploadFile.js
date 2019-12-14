import React from 'react';
import './progress.css'
import * as Upload from './UploadFile';  
class TestUpLoadFile extends React.Component{
    constructor(pros){
        super(pros);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (e){
        var file = document.getElementById("filename");
        var url = "http://localhost:9000/upload";
        var resultUpload = document.getElementById("resultUpload");
       
        Upload.SendFile(file,url,resultUpload);
    }
    render(){
        return( 
            <div className="">
                <h4>Test Upload File </h4>
                <br/>
                
                <div className="dev_center">
                    
                <table border="0" className="App" width="100%" >
                    <tbody>
                        <tr><td colSpan="2"> <div id="dropbox" className="dropbox">
                
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