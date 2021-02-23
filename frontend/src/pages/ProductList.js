/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

import Loading from "../components/Loading"
import Alert from "../components/Alert"
import Rating from '../components/Rating'
import { listProducts } from '../actions/productActions'

export default function ProductList() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            {
                loading
                ? <Loading />
                : error
                ? <Alert variant="danger">{ error }</Alert>
                : (
                    <div className="product-list container">
                        {
                            products.map((product) => (
                                <div key={ product._id } className="product-card">
                                    <a href={ `/product/${product._id}` } className="image">
                                        <img src={ process.env.PUBLIC_URL + product.image } />
                                    </a>
                                    <div className="info">
                                        <a href="#" className="title">{ product.name }</a>
                                        <h3 className="price">${ product.price }</h3>
                                        <Rating rating={ product.rating } numReviews={ product.numReviews } />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
