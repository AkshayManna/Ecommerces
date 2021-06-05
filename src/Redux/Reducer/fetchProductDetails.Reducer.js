
const initialState ={};

export function fetchProductDetailsReducer(state = initialState,action){
    
    switch(action.type){
        case 'FETCH_PRODUCTDETAILS_REQUEST':
        return {
            ...state,
           loading:true
        }
        case 'FETCH_PRODUCTDETAILS_SUCCESS':
            
        return{
            loading:true,
            productDetails:action.payload,
            error:[]
        }
        case 'FETCH_PRODUCTDETAILS_FAILURE':
        return{
            loading:true,
            productDetails:[],
            error:action.payload
        }
        default:
        return state;
    }
}
