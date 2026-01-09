import hamburgerSvg from '@/assets/hamburguer.svg'
import './index.css'

export default function Presentation() {
    return (
        <div className="presentation">
            <p className="presentation__p">
                Olá, <br />
                Bem vindo!
            </p>
            <img
                className="presentation__img"
                src={hamburgerSvg}
                alt="hamburger-icon"
            />
        </div>
    )
}
