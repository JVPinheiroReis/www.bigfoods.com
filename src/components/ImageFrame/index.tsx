import './index.css'

export default function ImageFrame({
    src,
    alt,
    desc,
}: {
    src: string
    alt: string
    desc: string
}) {
    return (
        <figure className="frame-wrapper">
            <img className="frame-image" src={src} alt={alt} />
            <figcaption className="frame-card">
                <p className="frame-description">{desc}</p>
            </figcaption>
        </figure>
    )
}
