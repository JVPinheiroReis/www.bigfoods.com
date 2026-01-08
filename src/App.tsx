import './App.css'
import PageHeader from './components/PageHeader'
import ProductList from './components/ProductList'
import WhoWeAre from './components/WhoWeAre'

export default function App() {
    return (
        <div className="app-container">
            <PageHeader />
            <main>
                <h1>Big Foods</h1>
                <section>
                    <h2>Saiba quem somos</h2>
                    <WhoWeAre />
                </section>
                <section>
                    <h2>Veja nossos produtos</h2>
                    <ProductList />
                </section>
            </main>
        </div>
    )
}
