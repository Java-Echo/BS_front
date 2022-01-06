import { List, Avatar, Space,Row,Col } from 'antd';
import React from 'react';
import {Button,Image,Drawer} from 'antd'
import axios from 'axios'
import EditPic from './editPic'
export default function EditCenter(props){
   const [list,setList] = React.useState([]);
   const itemid = sessionStorage.getItem('id');
   const [visible,setVisible] = React.useState(false);
   var data = ""
   var name = ""
  function onClose()  {
    setVisible(false);
  };
   React.useEffect(()=>{
     const fn = async ()=>{
      const data = await axios.get('http://localhost:8080/getTasks');
      console.log(data)
      setList(data.data)
      console.log(list)
     }
      fn()
      console.log(itemid)
   },[])
     
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
              renderItem={item => (
                <List.Item
               
                extra={
                  <>
                  <Row justify='center' align='middle'>
                      <Col><Image
                    width={150}
                    alt="logo"
                    src={item.data} /></Col>
                      <Col><Button onClick={async() =>{
                        data = item.data
                        name = item.name
                        setVisible(true)
                        console.log(data)
                        
                        console.log(name)
                    }}>开始标注</Button></Col>
                  </Row>
               
                    </>
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<div>发布人id:{item.id}</div>}
                  description={<div >{item.name}</div>}
                />
              </List.Item>
            )}
        /> 
        <Drawer title="Basic Drawer" placement="right" width={1300} onClose={onClose} visible={visible}>
        <EditPic file={data} name={name}/>
      </Drawer> 
        </>
        )
    // }
}
