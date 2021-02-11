import { useEffect, useState } from "react"
import axios from "axios"

import Header from "./components/Header"
import ProductList from "./pages/ProductList"
import Loading from "./components/Loading"
import Alert from "./components/Alert"

function App() {
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
            <Header />
            {
                loading
                ? <Loading />
                : error
                ? <Alert variant="danger">{ error }</Alert>
                : <ProductList products={ products } />
            }            
        </div>
    );
}

export default App