import Button from '@mui/material/Button';
import {Row,Col} from 'antd'
import ReactFileReader from 'react-file-reader';
import React from 'react';
import axios from 'axios';
import { List, Typography, Divider } from 'antd';


export default function Video(){
  const [file,setFile] = React.useState("");
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
    // const[data,setData] = React.useState(null)
    async function getImage() {
        console.log('getImage');
        var video = document.getElementsByTagName('video')[0];
        video.crossOrigin = 'anonymous'
        var canvas = document.getElementById('canvas');
        var cobj = canvas.getContext('2d'); //获取绘图环境
        cobj.drawImage(video, 0, 0, 200, 300);
        let base64 = canvas.toDataURL('image/jpeg', 0.5)
        // console.log(base64)
        
      }
      async function handleFiles(files){
        console.log("data="+encodeURI(files.base64));
        // console.log(sessionStorage.getItem('id'));
        
        var str = files.base64.replace(/;/g, '%3B');
        const {data} = await axios.post("http://localhost:8080/uploadPicture?id=test&name=test1&data="+encodeURI(str))
      }
        return(
          <Col>
          <Row type="flex" justify="center" align="middle" style={{minHeight:'0vh'}}> 
          
          <Col><video
            controls = "controls"
            crossOrigin = "anonymous"
            width='600'
            height='400'>
          <source src={file}  type="video/mp4"/>
        </video></Col>
        <Col><Button type="primary" onClick = {getImage}>点击截图</Button></Col>
        <canvas id="canvas" width = "200" height = "300"   ></canvas>
        </Row>
        <Row justify='center' align='middle'>
        
        </Row>
        <Row>
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
        </Row>
        </Col>
        
          
        )
}