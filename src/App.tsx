import Header from '@/components/Header'
import ProductPannel from '@/components/ProductPannel'

import './App.css'

export default function App() {
    return (
        <div>
            <Header />
            <h1 className="title">Fast Food Site Header</h1>
            <p>Aqui se vende: hamburger, batata frita...</p>
            <ProductPannel />
        </div>
    )
}
