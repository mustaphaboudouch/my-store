/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { data } from "../data"
import Rating from "../components/Rating"

export default function ProductDetails(props) {
    const product = data.products.find((p) => p._id === props.match.params.id)

    return (
        <div className="product-details container">
            <div className="image">
                <img src={ process.env.PUBLIC_URL + product.image } />
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
