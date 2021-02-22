/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import Rating from "../components/Rating"

export default function ProductDetails(props) {
    const product = props.products.find(p => p._id === props.match.params.id)

    return (
        <div className="product-details container">
            <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0032/3279/2674/products/1000006516917-1804-Pink-Fuchsia-1000006516917-1804_06-1200-min_d7200055-ce06-4475-8341-b011176ca389_1024x1024.jpg" />
            </div>
            <div className="details">
                <span className="brand">{ product.brand }</span>
                <h2 className="title">{ product.name }</h2>
                <Rating rating={ product.rating } numReviews={ product.numReviews } />
                <h3 className="price">${ product.price }</h3>
                <p className="description">{ product.description }</p>
                <button className="add-to-cart">Add to cart</button>
            </div>
        </div>
    )
}
