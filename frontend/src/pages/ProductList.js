/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function ProductList(props) {
    return (
        <div className="product-list container">
            {
                props.products.map((product) => (
                    <div className="product-card">
                        <a href="#" className="image">
                            <img src={ product.img } />
                        </a>
                        <div className="info">
                            <a href="#" className="title">{ product.title }</a>
                            <h3 className="price">$170,00</h3>
                            <div className="rating">
                                <div className="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                <span className="count">4 reviews</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
