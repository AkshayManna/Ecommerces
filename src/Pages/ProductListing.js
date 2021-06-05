import React,{useEffect ,useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductComponent from './ProductComponent';
import Eheaders from './Eheaders'
import {fetchProductDetails} from '../Redux/Action/fetchProduct.action';
import { connect } from 'react-redux';



const ProductListing = (props)=>{
    

    const showDetails =(id)=>{
      localStorage.setItem('ProductId', id);
      history.push('/ProductDetails');
      
      console.log(id,'gggggggggggg')
    }
    let history = useHistory();
    useEffect(()=>{
        props.fetchProduct() ;
    },[]);

    console.log(props.fetchProductList,'fetchProductListfetchProductList')
    const renderList = props.fetchProductList &&props.fetchProductList.map((product)=>{
        const id =product.id;
        return(
            <>
            <div className="card" style={{width: '18rem'}}>
               <center> <img  src={product.image} alt={product.title} style={{width:'100px',height:'100px',justifyContent:'center' }}/></center>
                <div class="card-body">
                    <h5 class="card-title">₹{product.price}</h5>
                    <p class="card-text">{product.title}</p>

                </div>
                <div >
                    <a href="javascript:void(0)" class="btn btn-primary" onClick={()=>showDetails(product.id)} >Show Details</a>
                    </div>
            </div>


            {/* <div className="four wide column" key={product.id}>
                <div className="ui grid container">
                    <div className="ui link cards">
                        <div className="card" style={{width:'400px',height:'300px',margin:'10px!important'}}>
                            <div className="image"  >
                                <img src={product.image} alt={product.title} style={{width:'100px',height:'100px' }}/>
                            </div>
                            <div className="content">
                                <div className="header"  >{product.title}</div>
                                <div className="meta price">₹{product.price}</div>
                                <div className="meta">{product.category}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            </>
        )
    })  
    return (
       <>
       <Eheaders/>
       <div className="ui grid container">
            {renderList}
       </div>
       </>
    );
}
const mapStateToProps = (state) =>{
    return{
        fetchProductList :state.productList.productList,
        fetchProductList :state.productList.productList
    }
  }
  
  const mapDispatchToProps = dispatch =>{
    return{
       fetchProduct:()=> dispatch(fetchProductDetails()),         
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)