import Button from '@mui/material/Button';
import {Row,Col} from 'antd'
import ReactFileReader from 'react-file-reader';
import React from 'react';
import axios from 'axios';
import { List, Typography, Divider } from 'antd';


export default function Video1(){
  const [file,setFile] = React.useState("");
    const[data,setData] = React.useState("")
    const id = sessionStorage.getItem('id');
    const filename = ""
    async function handleSubmit(){

      const tt = await axios.post('http://localhost:8080/uploadPicture?id='+id+"&data="+data+"&name=test1.jpg")
      console.log(data)
    }
    async function getImage() {
        console.log('getImage');
        var video = document.getElementsByTagName('video')[0];
        video.crossOrigin = 'anonymous'
        var canvas = document.getElementById('canvas');
        var cobj = canvas.getContext('2d'); //获取绘图环境
        cobj.drawImage(video, 0, 0, 600, 400);
        let base64 = canvas.toDataURL('image/jpeg', 0.5)
        console.log(base64)
        var str = base64.replace(';', '%3B');
        // console.log(str)
        setData(str)
        // console.log(base64)
        
      }
        return(
          <Col>
          <Row type="flex" justify="center" align="middle" style={{minHeight:'0vh'}}> 
          
          <Col><video
            controls = "controls"
            crossOrigin = "anonymous"
            width='600'
            height='400'>
          <source src="/video/test.mp4"  type="video/mp4"/>
        </video></Col>
        <Col><Button type="primary" onClick = {getImage}>点击截图</Button>
        <Button type="primary" onClick = {handleSubmit}>上传图片</Button></Col>
        <canvas id="canvas" width = "600" height = "400"   ></canvas>
        </Row>
        <Row justify='center' align='middle'>
        
        </Row>
        {/* <Row>
           <ReactFileReader
         fileTypes={[".mp4",".jpg",".gif", "jpeg"]}
         base64
         
         multipleFiles={!1}
         handleFiles={handleFiles}>
         <Button >截图列表</Button>
      </ReactFileReader>
        </Row>
        <Row>
        <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
        </Row> */}
        </Col>
        
          
        )
}