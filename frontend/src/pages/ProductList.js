/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function ProductList(props) {
    return (
        <div className="product-list container">
            {
                props.products.map((product) => (
                    <div key={ product._id } className="product-card">
                        <a href="#" className="image">
                            <img src={ process.env.PUBLIC_URL + product.image } />
                        </a>
                        <div className="info">
                            <a href="#" className="title">{ product.name }</a>
                            <h3 className="price">${ product.price }</h3>
                            <div className="rating">
                                <div className="stars">
                                    <i className={
                                        product.rating >= 1
                                            ? 'fa fa-star'
                                            : product.rating >= 0.5
                                                ? 'fas fa-star-half-alt'
                                                : 'far fa-star' }></i>
                                    <i className={
                                        product.rating >= 2
                                            ? 'fa fa-star'
                                            : product.rating >= 1.5
                                                ? 'fas fa-star-half-alt'
                                                : 'far fa-star' }></i>
                                    <i className={
                                        product.rating >= 3
                                            ? 'fa fa-star'
                                            : product.rating >= 2.5
                                                ? 'fas fa-star-half-alt'
                                                : 'far fa-star' }></i>
                                    <i className={
                                        product.rating >= 4
                                            ? 'fa fa-star'
                                            : product.rating >= 3.5
                                                ? 'fas fa-star-half-alt'
                                                : 'far fa-star' }></i>
                                    <i className={
                                        product.rating >= 5
                                            ? 'fa fa-star'
                                            : product.rating >= 4.5
                                                ? 'fas fa-star-half-alt'
                                                : 'far fa-star' }></i>
                                </div>
                                <span className="count">{ product.numReviews } reviews</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
