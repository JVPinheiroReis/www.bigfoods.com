import deliverying from '@/assets/deliverying.svg'
import deliveryingShopSvg from '@/assets/deliverying-shop.svg'

import './index.css'

export default function DeliverWays() {
    return (
        <div className="deliver-ways">
            <figure className="deliver-ways__figure">
                <img
                    className="deliver-ways__img"
                    src={deliveryingShopSvg}
                    alt="deliverying-shop-svg"
                />
                <figcaption className="deliver-ways__figcaption">
                    Você pode pegar na loja.
                </figcaption>
            </figure>
            <figure className="deliver-ways__figure">
                <img
                    className="deliver-ways__img"
                    src={deliverying}
                    alt="deliverying-svg"
                />
                <figcaption className="deliver-ways__figcaption">
                    Nós levamos até você.
                </figcaption>
            </figure>
        </div>
    )
}
