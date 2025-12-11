import Carousel from '@/components/Carousel'
import Header from '@/components/Header'
import './App.css'

export default function App() {
    return (
        <div>
            <Header />
            <h1 className="title">Fast Food Site Header</h1>
            <p>Aqui se vende: hamburger, batata frita...</p>
            <Carousel />
        </div>
    )
}
