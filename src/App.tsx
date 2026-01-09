import PageHeader from '@/components/PageHeader'
import Presentation from '@/components/Presentation'
import ProductList from '@/components/ProductList'

import './App.css'
import DeliverWays from './components/DeliverWays'

export default function App() {
    return (
        <div className="app-container">
            <PageHeader />
            <main>
                <h1 className="app-container__h1">Big Foods</h1>
                <section>
                    <Presentation />
                </section>
                <section>
                    <h2 className="app-container__h2">Veja nossos produtos</h2>
                    <ProductList />
                </section>
                <section>
                    <h2 className="app-container__h2">Formas de entrega</h2>
                    <DeliverWays />
                </section>
            </main>
        </div>
    )
}
