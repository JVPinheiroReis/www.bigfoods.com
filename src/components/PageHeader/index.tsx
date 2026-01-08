import Contacts from '@/components/Contacts'
import Icon from '@/components/Icon'
import NavMenu from '../NavMenu'

import './index.css'

export default function PageHeader() {
    return (
        <header className="page-header">
            <div className="page-header__branding">
                <Icon />
                <Contacts />
            </div>
            <NavMenu />
        </header>
    )
}
