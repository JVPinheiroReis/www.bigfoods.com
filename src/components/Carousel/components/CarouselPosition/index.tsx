export default function CarouselPosition({
    position,
    handlePosition,
}: {
    position: number
    handlePosition: (position: number) => void
}) {
    return (
        <div className="carousel-position">
            <button
                type="button"
                className="carousel-position-button"
                onClick={() => handlePosition(0)}
            >
                -
            </button>
            <button
                type="button"
                className="carousel-position-button"
                onClick={() => handlePosition(1)}
            >
                -
            </button>
            <button
                type="button"
                className="carousel-position-button"
                onClick={() => handlePosition(2)}
            >
                -
            </button>
            {position}
        </div>
    )
}
