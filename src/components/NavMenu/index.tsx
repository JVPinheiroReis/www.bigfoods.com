import './index.css'

export default function NavMenu() {
    return (
        <nav>
            <ul className="nav-menu">
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
