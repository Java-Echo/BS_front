import React,{Component} from 'react';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import LoginPage from './loginPage';
import RegisterPage from './registerPage';
import MainRouter from '../mainPages/mainRouter';
// import PermanentDrawerLeft from '../Main/mainPage';
export default class loginRouter extends Component{
    state ={
        islogin: false,
    }
    render(){
        return(
            <BrowserRouter>
            <Routes>
               <Route path="/loginPage" element={<LoginPage/>}/>
               <Route path="/registerPage" element={<RegisterPage/>}/>
               <Route path='/mainRouter' element={<MainRouter/>}/>
               <Route path="*" element={<Navigate to="/loginPage" />}/> 
           </Routes>
           </BrowserRouter>
        )
    }
}

