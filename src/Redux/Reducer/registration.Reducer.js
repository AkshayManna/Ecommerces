
const initialState ={};

export function registrationReducer(state = initialState,action){
    
    switch(action.type){
        case 'POST_REGISTRATION_REQUEST':
        return {
            ...state,
           loading:true
        }
        case 'POST_REGISTRATION_SUCCESS':
            
        return{
            loading:false,
            postUsers:action.payload,
            error:[]
            
        }
        case 'POST_REGISTRATION_FAILURE':
        return{
            loading:false,
            postUsers:[],
            error:action.payload
        }
        default:
        return state;
    }
}
