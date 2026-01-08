import './index.css'

export default function Contacts() {
    return (
        <address className="contact-container">
            <ul className="contact-list">
                <li className="contact-list__li">
                    <a href="tel:+5562999990000">Telefone</a>
                </li>
                <li className="contact-list__li">
                    <a href="mailto:example@email.com">Email</a>
                </li>
            </ul>
        </address>
    )
}
