/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import axios from "axios"

import Loading from "../components/Loading"
import Alert from "../components/Alert"
import Rating from '../components/Rating'

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get('/api/products')
                setLoading(false)
                setProducts(data)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

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
