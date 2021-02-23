import { BrowserRouter, Route } from "react-router-dom"

import Header from "./components/Header"
import ProductList from "./pages/ProductList"
import ProductDetails from "./pages/ProductDetails"

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route path="/product/:id" component={ ProductDetails } exact></Route>
                <Route path="/" component={ ProductList } exact></Route>
            </div>
        </BrowserRouter>
    );
}

export default App