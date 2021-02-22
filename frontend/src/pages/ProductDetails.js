/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function ProductDetails() {
    return (
        <div className="product-details container">
            <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0032/3279/2674/products/1000006516917-1804-Pink-Fuchsia-1000006516917-1804_06-1200-min_d7200055-ce06-4475-8341-b011176ca389_1024x1024.jpg" />
            </div>
            <div className="details">
                <span className="brand">Brand</span>
                <h2 className="title">This is the title</h2>
                <div className="rating">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <span className="count">4 reviews</span>
                </div>
                <h3 className="price">$170,00</h3>
                <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos laboriosam corporis consequatur repellendus provident, perspiciatis eius cumque molestias beatae deleniti inventore id voluptatum, assumenda unde harum accusamus ab nulla veritatis.</p>
                <button className="add-to-cart">Add to cart</button>
            </div>
        </div>
    )
}
