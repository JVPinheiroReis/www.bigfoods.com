import './index.css'

export default function ImageCard({
    src,
    alt,
    desc,
}: {
    src: string
    alt: string
    desc: string
}) {
    return (
        <figure className="image-card">
            <img className="image-card__img" src={src} alt={alt} />
            <figcaption className="image-card__caption">
                <p className="image-card__description">{desc}</p>
            </figcaption>
        </figure>
    )
}
