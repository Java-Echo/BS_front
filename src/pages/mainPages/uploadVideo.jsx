import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React, {Component} from 'react';
import {Button,Image,Input} from 'antd'
import axios from 'axios'
import ReactFileReader from 'react-file-reader';
import { Modal} from 'antd';

export default function Picture(props){
   const [list,setList] = React.useState([]);
   const itemid = sessionStorage.getItem('id');
   const [fileName,setFileName] = React.useState('');
 
   React.useEffect(()=>{
     const fn = async ()=>{
      const data = await axios.post('http://localhost:8080/getVideo?id='+itemid);
      console.log(data)
      setList(data.data)
     }
      fn()
      console.log(list)
   },[])
 
     async function handleFiles(files){
        // console.log(sessionStorage.getItem('id'));
        console.log(files.base64)
        console.log(files.fileList[0].name)
        var str = files.base64.replace(/;/g, '%3B');
        const ret =  axios.post("http://localhost:8080/uploadVideo?id="+itemid+"&name="+files.fileList[0].name+"&data="+encodeURI(str))
    }
    // render(){
      
        return(
          <>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 5,
              }}
              dataSource={list}
              footer={
                <ReactFileReader
                  fileTypes={[".mp4"]}
                  base64
                  multipleFiles={!1}
                  handleFiles={handleFiles}>
                  <Button >上传视频</Button>
              </ReactFileReader>
              }
              renderItem={item => (
                <List.Item
               
                extra={
                  <>
                    <Button onClick={() =>{
                      console.log('ddd');
                    }}>开始截图</Button>
                    
                    </>
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<div>{itemid}</div>}
                  // description={<div >{item.name}</div>}
                />
              </List.Item>
            )}
        /> 
        
        </>
        )
    // }
}
