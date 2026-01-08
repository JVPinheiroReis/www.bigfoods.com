import Header from '@/components/Header'
import ProductPannel from '@/components/ProductPannel'

import './App.css'
import WhoWeAre from './components/WhoWeAre'

export default function App() {
    return (
        <div className="main">
            <Header />
            <main>
                <h1>Big Foods</h1>
                <section>
                    <h2>Saiba quem somos</h2>
                    <WhoWeAre />
                </section>
                <section>
                    <h2>Veja nossos produtos</h2>
                    <ProductPannel />
                </section>
            </main>
        </div>
    )
}
