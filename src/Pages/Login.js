import React,{useEffect,useState} from 'react';
import Eheaders from './Eheaders'
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../Redux/Action/login.action';
import { connect } from 'react-redux';

const notify = (msg) => toast(msg);
const  Login = (props) =>{
    const [email,setEmail]               =  useState('');
    const [password,setPassword]         =  useState('');

    const [buttonStatus,setButtonStatus] =  useState('false');

    const Data = {"email":email,"password":password}

    const formSubmit =(e)=>{
        e.preventDefault();
        setButtonStatus('true');
        props.userLogin(Data);
    }
  
    // if(props.loginData && props.loginData.postlogin && !props.loginData.postlogin.message=='Invalid Credentials'){
    //     setButtonStatus('');
    //    ///console.log(buttonStatus,'testTestTestTestTestTestTestTestTestTest')
    // }    

    if(props.loginData && props.loginData.postlogin && props.loginData.postlogin.message){
        const msg= props.loginData.postlogin.message
         console.log(msg,'testTestTestTestTestTestTestTestTestTest')
        notify(msg);
    }


    return(
        <>
        <Eheaders/>
        <ToastContainer/>
        <body >
            <div className="login"  style={{margin: 'auto', width: '50%'}}>
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-12">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" onSubmit={formSubmit}>
                                    <h3 className="text-center text-info">Login </h3>
                                    <div className="form-group">
                                        <label for="username" className="text-info">Username:</label><br/>
                                        <input type="text" 
                                        name="username" 
                                        id="username" 
                                        className="form-control"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    /> 
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="text-info">Password:</label><br/>
                                        <input type="password" 
                                        name="password" 
                                        id="password" 
                                        className="form-control"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" class="btn btn-primary" >Login</button>
                                    </div>
                                    <div className="form-group">
                                        <a href="#" className="ForgetPwd" value="Login">Forget Password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </body>
        
        </>    
    );
}

const mapStateToProps = (state) => {
    return {
        loginData: state.loginData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (Data) => dispatch(login(Data)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login) 

