import React from 'react';
import * as Upload from './UploadFile';  
class TestUpLoadFile extends React.Component{
    constructor(pros){
        super(pros);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (e){
        var file = document.getElementById("filename");
        var url = "http://localhost:9000/upload";
        Upload.SendFile(file,url);
    }
    render(){
        return( 
            <div className="App">
                <h4>Test Upload File </h4>
                <br/>
                <input type="file" name ="filename" id="filename"/>
                <input type="button" value="Upload" onClick={this.handleClick} />
            
            </div>
        );
    }
}
 
export default TestUpLoadFile;