import React,{Component} from 'react';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import LoginPage from './loginPage';
import RegisterPage from './registerPage';
import MainRouter from '../mainPages/mainRouter';
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor';
import Video from '../mainPages/uploadVideo';
import Picture from '../mainPages/uploadPic';
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
                   <Route path='uploadVideo' element={<Video/>}/>
                    <Route  path='editPic' element={
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
                        rotatingPointOffset: 70,
                        cornerColor: "blue",
                    }}
                    usageStatistics={true}
                    />}/>
               </Route>
               <Route path="*" element={<Navigate to="/loginPage" />}/> 
           </Routes>
            </BrowserRouter> 
        )
    }
}

