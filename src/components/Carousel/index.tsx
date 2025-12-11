import { useState } from 'react'
import reactSVG from '@/assets/react.svg'
import CarouselItem from './components/CarouselItem'
import CarouselItemCaption from './components/CarouselItemCaption'
import CarouselItemImage from './components/CarouselItemImage'
import CarouselItemLabel from './components/CarouselItemLabel'
import CarouselPosition from './components/CarouselPosition'

export default function Carousel() {
    const [position, setPosition] = useState(0)

    return (
        <div>
            <CarouselItem>
                <CarouselItemLabel text="Firt item" />
                <CarouselItemImage src={reactSVG} />
                <CarouselItemCaption text="Item caption" />
            </CarouselItem>

            <CarouselPosition
                position={position}
                handlePosition={setPosition}
            />
        </div>
    )
}
