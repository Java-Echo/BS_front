import { List, Avatar, Space } from 'antd';
import React from 'react';
import {Button,Image,} from 'antd'
import axios from 'axios'

export default function EditCenter(props){
   const [list,setList] = React.useState([]);
   const itemid = sessionStorage.getItem('id');
 
 
   React.useEffect(()=>{
     const fn = async ()=>{
      const data = await axios.get('http://localhost:8080/getTasks');
      console.log(data)
      setList(data.data)
      console.log(list)
     }
      fn()
   },[])
 
     
    // render(){
      
        return(
          <>
            {/* <List
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
                  <><Image
                    width={272}
                    alt="logo"
                    src={item.data} />
                    <Button onClick={() =>{
                        console.log('dd')
                    }}>发布任务</Button>
                    
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
        />   */}
        </>
        )
    // }
}
