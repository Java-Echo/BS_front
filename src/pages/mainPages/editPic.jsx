import React from 'react';
import {Annotator} from 'image-labeler-react';
import FileSaver, { saveAs } from 'file-saver'
import {Button} from 'antd'
export default class EditPic extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        this.setState ({
            data: '',
            type: '',
        })
    }
    
    handleVOC = () =>{
        var content = JSON.stringify(this.state.data)
        var blob = new Blob([content], {type: ""});
        saveAs(blob,"result.xml")
    }
    handleJSON = () =>{
        var content = JSON.stringify(this.state.data)
        var blob = new Blob([content], {type: ""});
        saveAs(blob,"result.json")
    }
    render(){
        // console.log(this.state.data)

    return (
        <>
        <div className="Test">
      <Annotator 
        height={600} 
        width={600} 
        imageUrl={"/images/test.jpg"} 
        asyncUpload={async (labeledData)=>{
            // upload labeled data
            console.log(labeledData);
            this.setState({
                data: labeledData
            })
        }} 
        types={['word', 'picture', 'data']}
        defaultType={"Cylinder"} />
    </div>
        <Button onClick={this.handleJSON}>导出为JSON文件</Button>
        <Button onClick={this.handleVOC}>导出为PASCAL VOC文件</Button>

    </>
    )
    }
}