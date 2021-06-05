
const initialState ={};

export function personalReducer(state = initialState,action){
    
    switch(action.type){
        case 'POST_PERSONALDETAILS_REQUEST':
        return {
            ...state,
           loading:true
        }
        case 'POST_PERSONALDETAILS_SUCCESS':
            
        return{
            loading:true,
            postPersonalDetails:action.payload,
            error:[]
        }
        case 'POST_PERSONALDETAILS_FAILURE':
        return{
            loading:true,
            postPersonalDetails:[],
            error:action.payload
        }
        default:
        return state;
    }
}
