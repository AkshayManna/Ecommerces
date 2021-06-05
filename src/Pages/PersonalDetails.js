import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';
import Header from './Header';
import { postPersonalDetails } from '../Redux/Action/personalDetails.action';
import { connect } from 'react-redux';

const PersonalDetails = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile_number, setMobile] = useState('');
    const [address, setAddress] = useState('');
  
    const [index, setIndex] = useState('');
    
    const [submited, setIssubmited] = useState(false);
    const [inputList, setInputList] = useState([{ firstName: ""}]);
    const [fromData, setFromdata] = useState('');

    const Data = { "name": name, "email": email, "mobile_number": mobile_number, "address": address,'count':index,'aadhaar':inputList}

        
    useEffect(() => {
       if(props.postPersonalData && props.postPersonalData.loading){
        setIssubmited(false);

       }
    },[props.postPersonalData]); ////// empty dependency array so fetch user() dispatch only once

    const addhartest =(e,index)=>{
        //setAadhaar(index.e);
        inputList[index].firstName = e;
        setInputList(inputList)
        setIndex((index+1))
        console.log(inputList,'inputList');
    }

    const fronSubmit = (e) => {
        e.preventDefault();

        // const formData = new FormData()

        // // Update the formData object
    
        // formData.append('name',name)
        // formData.append('email',email)
        // formData.append('mobile_number',mobile_number)
        // formData.append('address',address)
        // formData.append('count',index)
        
        // inputList.map((item,key)=>{
        //    formData.append('aadhaar'+(key+1),item)
        // })
        // setFromdata(formData);
        setIssubmited(true);
        props.postUser({'name':name,'email':email,'mobile_number':mobile_number,'address':address,'aadhar':inputList});
          

    }
    const RemoveAadhaar =(index)=>{
        if(inputList.length !== 1)
        {
            const list = [...inputList];
            list.splice(index, 1);
            setInputList(list);
        }

    }


    const AddAadhaar =(e)=>{
        
        setInputList([...inputList,{ firstName: ""}])

        console.log(inputList)
        
    }

    return (
        <>
            <Header />
            <ToastContainer />
            <div className="container register-form" style={{display: "contents"}}>
                {submited &&
                    <Loader/>
                }
              
                <div className="form">
                    <div className="note">
                        <p>Personal Details</p>

                    </div>
                    <form onSubmit={fronSubmit} >
                        <div className="form-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Your Name *"
                                            name="name"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="email"
                                            className="form-control"
                                            placeholder="Enter your Email*"
                                            name="email"
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
                                            name="mobile_number"
                                            value={mobile_number}
                                            onChange={(e) => setMobile(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text"
                                            className="form-control"
                                            placeholder="Enter your address *"
                                            name="address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                            
                                <div className="col-md-12">
                                {inputList.map((List, index) => {
                                return (
                                   
                                <div key={index}>
                                    <div className="form-group">
                                        <label>Aadhar Card</label>
                                        <input type="file" 
                                            name = "aadhaar"
                                            value={inputList.List}
                                            // onChange={(e)=>setAadhaar(e.target.files[0])}
                                            onChange ={(e)=>addhartest(e.target.files[0],index)}
                                            
                                        />
                                    </div>
                                </div>
                                )
                                })}

                                <input type="button" onClick={(e)=>AddAadhaar(e)} className= "btn btn-primary" value="Addmore"/>
                                <input type="button" onClick={(e)=>RemoveAadhaar(e)} className="btn btn-danger" style={{position: 'relative',left: '2%'}} value="Remove"/>
                                </div>
                            
                            
            
                            </div>
                            <button type="submit" className="btnSubmit" style={{'margin-top': '10px'}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        postPersonalData: state.postPersonalData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postUser: (Data) => dispatch(postPersonalDetails(Data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails)