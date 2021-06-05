import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../Constant'

import axios from 'axios'

export const fetchUsersRequest = ()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}

const fetchUsersSuccess = data =>{
    return {
        type:FETCH_USER_SUCCESS,
        payload: data
    }
}

const fetchUsersFailure = error =>{
    return {
        type:FETCH_USER_FAILURE,
        payload: error
    }
}

export const  get_user_list=()=>{
    return dispatch => {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          const data = response.data
          console.log(data,'fsdfsfdsz')
          dispatch(fetchUsersSuccess(data)) 
        })
        .catch(error =>{
            const errorMsg=error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    };

}