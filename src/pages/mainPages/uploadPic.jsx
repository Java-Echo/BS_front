import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React, {Component} from 'react';
import {Button,Image} from 'antd'
import axios from 'axios'
import ReactFileReader from 'react-file-reader';


export default function Picture(props){
   const [list,setList] = React.useState([]);
   const itemid = sessionStorage.getItem('id');
   React.useEffect(()=>{
     const fn = async ()=>{
      const data = await axios.post('http://localhost:8080/getPicture?id='+itemid);
      setList(data.data)
     }
      fn()
      console.log(list)
   },[])
 
     async function handleFiles(files){
        // console.log(sessionStorage.getItem('id'));
        console.log(files)
        console.log(files.fileList[0].name)
        var str = files.base64.replace(/;/g, '%3B');
        const ret =  axios.post("http://localhost:8080/uploadPicture?id="+itemid+"&name="+files.fileList[0].name+"&data="+encodeURI(str))
    }
    // render(){
      
        return(
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 3,
              }}
              dataSource={list}
              footer={
                <ReactFileReader
                  fileTypes={[".png",".jpg",".gif", "jpeg"]}
                  base64
                  
                  multipleFiles={!1}
                  handleFiles={handleFiles}>
                  <Button >上传图片</Button>
              </ReactFileReader>
              }
              renderItem={item => (
                <List.Item
                actions={[<Button>发布任务</Button>]}
                extra={
                  <Image
                    width={272}
                    alt="logo"
                    src={item.data}
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<div>{itemid}</div>}
                  description={<div >{item.name}</div>}
                />
              </List.Item>
            )}
  />
        )
    // }
}
