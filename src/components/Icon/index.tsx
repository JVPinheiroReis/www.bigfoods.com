import iconSvg from '@/assets/icon.svg'

import './index.css'

export default function Icon() {
    return (
        <article className="icon-container">
            <img className="icon-image" src={iconSvg} alt="icon" />
        </article>
    )
}
