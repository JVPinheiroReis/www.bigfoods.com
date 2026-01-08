import burgerWithCheese from '@/assets/burger-with-cheese.jpg'
import burgerWithCheeseAndBacon from '@/assets/burger-with-cheese-and-bacon.jpg'
import frenchFriesAndBurger from '@/assets/french-fries-and-burger.jpg'
import milkshake from '@/assets/milkshake.jpg'

import './index.css'
import ImageCard from '../ImageCard'

export default function ProductList() {
    return (
        <ul className="product-list">
            <li className="product-list__li">
                <ImageCard
                    src={burgerWithCheeseAndBacon}
                    alt="some test icon"
                    desc="Hambúrguer com queijo e bacon"
                />
            </li>
            <li className="product-list__li">
                <ImageCard
                    src={burgerWithCheese}
                    alt="some test icon"
                    desc="Hambúrguer com queijo"
                />
            </li>
            <li className="product-list__li">
                <ImageCard
                    src={frenchFriesAndBurger}
                    alt="some test icon"
                    desc="Porção de batatas fritas"
                />
            </li>
            <li className="product-list__li">
                <ImageCard
                    src={milkshake}
                    alt="some test icon"
                    desc="Milkshake"
                />
            </li>
        </ul>
    )
}
