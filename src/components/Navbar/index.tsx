import './index.css'

export default function Navbar() {
    return (
        <ul className="navbar">
            <li>
                <a className="filled-button" href="/about">
                    Link 1
                </a>
            </li>
            <li>
                <a className="filled-button" href="/contacts">
                    Link 2
                </a>
            </li>
        </ul>
    )
}
