import React,{useEffect ,useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header'

import {postRegistration} from '../Redux/Action/registration.action';
import {get_user_list} from '../Redux/Action/user.action';
import { connect } from 'react-redux';

import Loader from './Loader';



const Registration =(props)=>{

    const [name,setName]                = useState('');
    const [email,setEmail]              = useState('');
    const [mobile_number,setMobile]     = useState('');
    const [address,setAddress]          = useState('');
    const [password,setPassword]        = useState('');
    const [c_password,setConPassword]   = useState('');
    const [issubmited, setIssubmited]   = useState(false);

    useEffect(()=>{
        
        if(props.postUserData && props.postUserData.postUsers && props.postUserData.postUsers.success ==="true" && issubmited)
        { 
            history.push("/Login");
        }
    },[props.postUserData])////// empty dependency array so fetch user() dispatch only once

    const Data = {"name":name,"email":email,"mobile_number":mobile_number,"address":address,"password":password,"c_password":c_password}

    //const notify = (msg) => toast(msg);
    let history = useHistory();


    const fronSubmit = (e)=>{
        e.preventDefault();
        setIssubmited(true)

        //////////////
        props.postUser(Data);
        ////////////
        console.log(issubmited,'star');
        console.log(props.postUserData.postUsers,'tttttttttttttttttttt')
    }

    return (
        <>
        <Header/>
        <ToastContainer />
        
       
        <div className="container register-form" style={{display: "contents"}}>
      
            <div className="form">
                <div className="note">
                    <p>Registration From.</p>
                   
                </div>
                <form onSubmit={fronSubmit}>
                    <div className="form-content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder="Your Name *" 
                                    name = "name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="email" 
                                    className="form-control" 
                                    placeholder="Enter your Email*" 
                                    name ="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="number" 
                                    className="form-control" 
                                    placeholder="Enter your Mobile No *" 
                                    name = "mobile_number"
                                    value={mobile_number}
                                    onChange={(e)=>setMobile(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" 
                                    className="form-control" 
                                    placeholder="Enter your address *" 
                                    name="address"
                                    value={address}
                                    onChange={(e)=>setAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" 
                                    className="form-control" 
                                    placeholder="Enter Password *" 
                                    name="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" 
                                    className="form-control" 
                                    placeholder="Confirm Password *" 
                                    value={c_password}
                                    onChange={(e)=>setConPassword(e.target.value)}
                                    />
                                </div>
                                {password && c_password && c_password!==password && 

                                <div style={{color: "red"}}>
                                    Password and confirm password not match
                                </div>
                                
                                }
                            </div>
                        </div>
                        <button type="submit" className="btnSubmit">Submit</button>
                    </div>
                </form>
                {/* {issubmited &&
                    <Loader />
                } */}
                
            </div>
        </div>
     </>
    )
}
const mapStateToProps = (state) =>{
    return{
      postUserData:state.postUser,
      userData:state.users
    }
  }
  
  const mapDispatchToProps = dispatch =>{
    return{
       postUser:(Data)=> dispatch(postRegistration(Data)),
       getUser:()=> dispatch(get_user_list())         
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Registration)