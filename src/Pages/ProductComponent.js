import React, { useEffect, useState } from 'react';
import Eheaders from './Eheaders'
import { fetchProductDetailsList } from '../Redux/Action/fetchProductDetails.action';
import { connect } from 'react-redux';

const ProductComponent = (props) => {
    const ProductId = localStorage.getItem('ProductId');
    useEffect(() => {
        props.fetchProductDetailsList(ProductId);
    }, []);

    return (
        <>
        <Eheaders/>
            <div className="container">
                <div className="card">
                    {
                        props.fetchProductList && props.fetchProductList.productDetails &&

                        <div className="container-fliud">
                            <div className="wrapper row">
                                <div className="preview col-md-6">

                                    <div className="preview-pic tab-content">
                                        <div className="tab-pane active" id="pic-1"><img src={props.fetchProductList.productDetails.image} /></div>
                                        <div className="tab-pane" id="pic-2"><img src={props.fetchProductList.productDetails.image} /></div>
                                        <div className="tab-pane" id="pic-3"><img src={props.fetchProductList.productDetails.image} /></div>
                                        <div className="tab-pane" id="pic-4"><img src={props.fetchProductList.productDetails.image} /></div>
                                        <div className="tab-pane" id="pic-5"><img src={props.fetchProductList.productDetails.image} /></div>
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={props.fetchProductList.productDetails.image} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img src={props.fetchProductList.productDetails.image} /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img src={props.fetchProductList.productDetails.image} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img src={props.fetchProductList.productDetails.image} /></a></li>
                                        <li><a data-target="#pic-5" data-toggle="tab"><img src={props.fetchProductList.productDetails.image} /></a></li>
                                    </ul>

                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">{props.fetchProductList.productDetails.title}</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <span className="review-no">41 reviews</span>
                                    </div>
                                    <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                                    <h4 className="price">current price: <span>${props.fetchProductList.productDetails.price}</span></h4>
                                    <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                    <h5 className="sizes">sizes:
                                <span className="size" data-toggle="tooltip" title="small">s</span>
                                        <span className="size" data-toggle="tooltip" title="medium">m</span>
                                        <span className="size" data-toggle="tooltip" title="large">l</span>
                                        <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                                    </h5>
                                    <h5 className="colors">colors:
                                <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                        <span className="color green"></span>
                                        <span className="color blue"></span>
                                    </h5>
                                    <div className="action">
                                        <button className="btn btn-primary" type="button">Add to cart</button>
                                        <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        fetchProductList: state.productDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductDetailsList: (e) => dispatch(fetchProductDetailsList(e))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent)