
const initialState ={};

export function fetchProductReducer(state = initialState,action){
    
    switch(action.type){
        case 'FETCH_PRODUCT_REQUEST':
        return {
            ...state,
           loading:true
        }
        case 'FETCH_PRODUCT_SUCCESS':
            
        return{
            loading:true,
            productList:action.payload,
            error:[]
        }
        case 'FETCH_PRODUCT_FAILURE':
        return{
            loading:true,
            productList:[],
            error:action.payload
        }
        default:
        return state;
    }
}
