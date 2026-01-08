import './index.css'

export default function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <a className="filled-button" href="/about">
                        Sobre
                    </a>
                </li>
                <li>
                    <a className="filled-button" href="/contacts">
                        Contato
                    </a>
                </li>
            </ul>
        </nav>
    )
}
