import React,{Component} from 'react';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import LoginPage from './loginPage';
import RegisterPage from './registerPage';
import MainRouter from '../mainPages/mainRouter';
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'
// import createBrowserHistory from 'history'
// import PermanentDrawerLeft from '../Main/mainPage';
export default class loginRouter extends Component{
    constructor(props){
        super(props);
        this.state = {
            account : '',
            password : '',
        }
    }
    state ={
        islogin: false,
    }
    
    render(){
        console.log(this.props.history);
        return(
            <BrowserRouter >
            <Routes >
               <Route path="/loginPage" element={<LoginPage/>} />
               <Route path="/registerPage" element={<RegisterPage/>} />
               <Route path='/mainRouter' element={<MainRouter/>}>
                   <Route poath='uploadVideo' element={
                        <video
                        controls = "controls"
                        crossOrigin = "anonymous"
                        width='1000'
                        height='700'
                        src = '../../video/test.mkv'/>}/>
                    <Route index path='editPic' element={
                        <ImageEditor
                        includeUI={{
                        loadImage: {
                            path: 'img/sampleImage.jpg',
                            name: 'SampleImage'
                        },
                        menu: ['shape', 'filter'],
                        initMenu: 'filter',
                        uiSize: {
                            width: '1000px',
                            height: '700px'
                        },
                        menuBarPosition: 'bottom'
                        }}
                        cssMaxHeight={500}
                        cssMaxWidth={700}
                        selectionStyle={{
                        cornerSize: 20,
                        rotatingPointOffset: 70
                    }}
                    usageStatistics={true}
                    />}/>
               </Route>
               <Route path="*" element={<Navigate to="/mainRouter" />}/> 
           </Routes>
            </BrowserRouter> 
        )
    }
}

