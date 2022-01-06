import { List, Avatar, Space ,Row,Col} from 'antd';
import React from 'react';
import {Button,Image,} from 'antd'
import axios from 'axios'

export default function EditUser(props){
   const [list,setList] = React.useState([]);
   const itemid = sessionStorage.getItem('id');
 
 
   React.useEffect(()=>{
     const fn = async ()=>{
      const data = await axios.post('http://localhost:8080/getYourTasks?id='+itemid);
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
                  <><Row justify='center' align='middle'>
                  <Col><Image
                width={150}
                alt="logo"
                src={item.data} /></Col>
                  <Col><Button onClick={() =>{
                    console.log('dd')
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
        </>
        )
    // }
}
