import './index.css'

export default function Contacts() {
    return (
        <address>
            <ul className="contacts-wrapper">
                <li>
                    <a href="tel:+5562999990000">Telefone</a>
                </li>
                <li>
                    <a href="mailto:example@email.com">Email</a>
                </li>
            </ul>
        </address>
    )
}
