import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { POST_PERSONALDETAILS_FAILURE, POST_PERSONALDETAILS_REQUEST, POST_PERSONALDETAILS_SUCCESS } from "../Constant/constant"


const notify = (msg) => toast(msg);
<ToastContainer/>
export const postUsersRequest = ()=>{
    return {
        type:POST_PERSONALDETAILS_REQUEST
    }
}


export const postUsersSuccess = (msg)=>{
    return {
        type:POST_PERSONALDETAILS_SUCCESS,
        payload: msg
    }
}

export const postUsersFalure = (errorMsg)=>{
    return {
        type:POST_PERSONALDETAILS_FAILURE,
        payload: errorMsg
    }
}

export const postPersonalDetails =(Data)=>{
    console.log('=====================================Data',Data)
     const formData = new FormData()

        // Update the formData object
    
        formData.append('name',Data.name)
        formData.append('email',Data.email)
        formData.append('mobile_number',Data.mobile_number)
        formData.append('address',Data.address)
        formData.append('aadhaar',Data.aadhar)

   
    return dispatch =>{
        dispatch(postUsersRequest())
        axios.post('http://localhost/8Laravel/public/api/personalRegistration',formData)
        .then(response => {
            const msg = response.data
            notify(msg.data);
            console.log(msg.data,'success_Action')
            dispatch(postUsersSuccess(msg)) 
           
          })
          .catch(error =>{
            const errorMsg = error.message
            notify(errorMsg.message);
            console.log(error,'assssssss')
            dispatch(postUsersFalure(errorMsg))
          })
    }
}