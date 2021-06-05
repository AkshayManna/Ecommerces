
const initialState ={};

export function loginReducer(state = initialState,action){
    
    switch(action.type){
        case 'POST_LOGIN_REQUEST':
        return {
            ...state,
           loading:true
        }
        case 'POST_LOGIN_SUCCESS':
            
        return{
            loading:false,
            postlogin:action.payload,
            error:[]
        }
        case 'POST_LOGIN_FAILURE':
        return{
            loading:false,
            postlogin:[],
            error:action.payload
        }
        default:
        return state;
    }
}
