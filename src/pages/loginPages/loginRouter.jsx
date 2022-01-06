import React,{Component} from 'react';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import LoginPage from './loginPage';
import RegisterPage from './registerPage';
import MainRouter from '../mainPages/mainRouter';
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor';
import Video from '../mainPages/uploadVideo';
import Picture from '../mainPages/uploadPic';
import EditPic from '../mainPages/imageEditor';
import EditCenter from '../mainPages/editCenter';
import EditUser from '../mainPages/editUser';
import Video1 from '../mainPages/screenShot'
import {Col, Row} from 'antd';
// import createBrowserHistory from 'history'
// import PermanentDrawerLeft from '../Main/mainPage';
export default class loginRouter extends Component{
    constructor(props){
        super(props);
        this.state = {
            islogin: false
        }
    }
    
    render(){
        console.log(this.props.history);
        return(
            <BrowserRouter >
            <Routes >
               <Route path="/loginPage" element={<LoginPage/>} />
               <Route path="/registerPage" element={<RegisterPage/>} />
               <Route path='/mainRouter' element={<MainRouter/>}>
                   <Route path='uploadPic' element={<Picture/>} />
                   <Route path='uploadVideo' element={<Video1/>}/>
                    <Route  path='editPic' element={<EditPic/>}/>
                    <Route path='editCenter' element={<EditCenter/>}/>
                    <Route path='editUser' element={<EditUser/>}/>
                    <Route path='' element={<>
                    {/* <h1>欢迎使用基于机器学习的图像标注网站</h1>
                    <h2>学号：3190105792</h2>
                    <h2>姓名：韩宇航</h2> */}
                    <Col>
                    <Row justify="center" align="middle">
                        <h1>欢迎使用基于机器学习的图像标注网站</h1>
                    </Row>
                    <Row justify="center" align="middle"><h2>学号：3190105792</h2></Row>
                    <Row justify="center" align="middle"><h2>姓名：韩宇航</h2></Row>
                    </Col>
                    </>
                        }/>
               </Route>
               <Route path="*" element={<Navigate to="/loginPage" />}/> 
           </Routes>
            </BrowserRouter> 
        )
    }
}

