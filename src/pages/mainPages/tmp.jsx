import { List, Avatar, Button, Skeleton } from 'antd';
import React,{Component} from 'react'
import 'antd/dist/antd.css';
import axios from 'axios'

export default class Tmp extends Component {
    state = {
        list: [],
    }
    async componentDidMount(){
        const data = await axios.post('http://localhost:8080/getPicture?id=test')
        this.setState({
            list: data.data
        })
        console.log(data.data)
        console.log(this.state.list[0].id)
    }
    render(){
    return (
        <List
        size = "large"
        itemLayout="horizontal"
        dataSource={this.state.list}
        renderItem={item => (
        <List.Item actions={[<Button>发布任务</Button>]}>
            <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.id}</a>}
            description={item.name}
            />
        </List.Item>
        )}
        />
    )
        }
}



// actions={[<Button>dd</Button>]}