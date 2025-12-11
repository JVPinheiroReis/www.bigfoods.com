import type { ReactNode } from 'react'

export default function CarouselItem({ children }: { children: ReactNode }) {
    return (
        <div>
            <div className="carousel-item">{children}</div>
        </div>
    )
}
