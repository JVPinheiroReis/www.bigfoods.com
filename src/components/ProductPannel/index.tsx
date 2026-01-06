import burgerWithCheese from '@/assets/burger-with-cheese.jpg'
import burgerWithCheeseAndBacon from '@/assets/burger-with-cheese-and-bacon.jpg'
import frenchFriesAndBurger from '@/assets/french-fries-and-burger.jpg'
import milkshake from '@/assets/milkshake.jpg'

import ImageFrame from '@/components/ImageFrame'

import './index.css'

export default function ProductPannel() {
    return (
        <ul className="product-pannel">
            <li>
                <ImageFrame
                    src={burgerWithCheeseAndBacon}
                    alt="some test icon"
                    desc="A SVG image just for test the description"
                />
            </li>
            <li>
                <ImageFrame
                    src={burgerWithCheese}
                    alt="some test icon"
                    desc="A SVG image just for test the description"
                />
            </li>
            <li>
                <ImageFrame
                    src={frenchFriesAndBurger}
                    alt="some test icon"
                    desc="A SVG image just for test the description"
                />
            </li>
            <li>
                <ImageFrame
                    src={milkshake}
                    alt="some test icon"
                    desc="A SVG image just for test the description"
                />
            </li>
        </ul>
    )
}
