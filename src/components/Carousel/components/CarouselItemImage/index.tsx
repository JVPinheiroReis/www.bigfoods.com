export default function CarouselItemImage({ src }: { src: string }) {
    return (
        <img className="carousel-item-image" src={src} alt="carousel-image" />
    )
}
