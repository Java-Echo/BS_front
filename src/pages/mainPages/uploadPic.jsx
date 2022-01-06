import { List, Avatar, Space,Row,Col} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React, {Component} from 'react';
import {Button,Image,Input} from 'antd'
import axios from 'axios'
import ReactFileReader from 'react-file-reader';
import { Modal} from 'antd';

export default function Picture(props){
   const [list,setList] = React.useState([]);
   const itemid = sessionStorage.getItem('id');
   const [visible, setVisible] = React.useState(false);
   const [confirmLoading, setConfirmLoading] = React.useState(false);
   const [description, setDescription] = React.useState('');
   const [tmp,setTmp]  = React.useState('');
   const [file,setFile] = React.useState('');
   const [fileName,setFileName] = React.useState('');
  async function handleOk  () {
    setDescription(tmp);
    setConfirmLoading(true);
    console.log(description);
    const {data} = await axios.post('http://localhost:8080/newTasks?id='+itemid+'&description='+description+'&data='+file+'&name='+fileName);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  function handleCancle(){
    setDescription('');
    setVisible(false);
  }
   React.useEffect(()=>{
     const fn = async ()=>{
      const data = await axios.post('http://localhost:8080/getPicture?id='+itemid);
      for(let key in data.data){
        // key = key.data.replace(/%3B/g, ';');
        // console.log(data.data[key].id)
        data.data[key].data = data.data[key].data.replace('%3B',';');
        // data.data[key].data = decodeURI(data.data[key].data)
      }
      // console.log(data.data[0].data)
      setList(data.data)
     }
      fn()
      console.log(list)
   },[])
 
     async function handleFiles(files){
        // console.log(sessionStorage.getItem('id'));
        console.log(files.base64)
        console.log(files.fileList[0].name)
        var str = files.base64.replace(';', '%3B');
        const ret =  axios.post("http://localhost:8080/uploadPicture?id="+itemid+"&name="+files.fileList[0].name+"&data="+encodeURI(str))
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
                  fileTypes={[".png",".jpg",".gif", "jpeg"]}
                  base64
                  
                  multipleFiles={!1}
                  handleFiles={handleFiles}>
                  <Button >上传图片</Button>
              </ReactFileReader>
              }
              renderItem={item => (
                <List.Item
               
                extra={
                  <>
                  <Row justify='center' align='middle'>
                    <Col>
                    <Image
                    width={150}
                    alt="logo"
                    src={item.data} /></Col>
                    <Col><Button onClick={() =>{
                      setVisible(true);
                      setFile(item.data);
                      setFileName(item.name);
                    }}>发布任务</Button></Col>
                    </Row>
                    
                    
                    </>
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
        <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancle}>
          <p>请描述您的需求</p>
          <Input placeholder="Your Description" 
          onChange={(e) => {
            setTmp(e.target.value);
          }}/>
        </Modal>  
        </>
        )
    // }
}
