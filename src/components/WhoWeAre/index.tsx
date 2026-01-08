import hamburgerSvg from '@/assets/hamburguer.svg'
import './index.css'

export default function WhoWeAre() {
    return (
        <div className="who-we-are">
            <p className="who-we-are__p">
                <b>Olá, seja muito bem vindo.</b>
                <br />
                Nós somos uma rede de lanchonetes chamada Big Foods e vendemos,
                principalmente, hambúrgueres e acompanhamentos.
            </p>
            <img
                className="who-we-are__img"
                src={hamburgerSvg}
                alt="hamburger-icon"
            />
        </div>
    )
}
